'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormEntry {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  service: string;
  message: string;
  leadStatus: string;
  createdAt: string;
}

export default function AdminLeadsPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [entries, setEntries] = useState<FormEntry[]>([]);
  const [loadingEntries, setLoadingEntries] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedEntries, setSelectedEntries] = useState<Set<string>>(new Set());
  const [isDeleting, setIsDeleting] = useState(false);
  const entriesPerPage = 10;
  const maxSelectionLimit = 100;

  useEffect(() => {
    // Check if already authenticated
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/entries?page=1&limit=10', {
        credentials: 'include',
      });
      if (response.ok) {
        setIsAuthenticated(true);
        const data = await response.json();
        setEntries(data.entries);
        if (data.pagination) {
          setTotalPages(data.pagination.totalPages);
          setTotalCount(data.pagination.totalCount);
          setCurrentPage(data.pagination.page);
        }
      } else {
        setIsAuthenticated(false);
        router.push('/admin');
      }
    } catch (error) {
      setIsAuthenticated(false);
      router.push('/admin');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    // Clear the cookie by setting it to expire
    document.cookie = 'admin_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/admin');
  };

  const fetchEntries = async (page: number = currentPage, clearSelection: boolean = false) => {
    setLoadingEntries(true);
    try {
      const response = await fetch(`/api/admin/entries?page=${page}&limit=${entriesPerPage}`, {
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setEntries(data.entries);
        if (data.pagination) {
          setTotalPages(data.pagination.totalPages);
          setTotalCount(data.pagination.totalCount);
          setCurrentPage(data.pagination.page);
        }
        // Clear selection if requested (e.g., after delete or page change)
        if (clearSelection) {
          setSelectedEntries(new Set());
        }
      } else if (response.status === 401) {
        router.push('/admin');
      }
    } catch (error) {
      console.error('Error fetching entries:', error);
    } finally {
      setLoadingEntries(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      fetchEntries(newPage, true); // Clear selection when changing pages
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this entry? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch('/api/admin/entries', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        // Refresh the current page and clear selection
        fetchEntries(currentPage, true);
      } else if (response.status === 401) {
        router.push('/admin');
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to delete entry');
      }
    } catch (error) {
      console.error('Error deleting entry:', error);
      alert('Failed to delete entry. Please try again.');
    }
  };

  const handleSelectEntry = (id: string) => {
    const newSelected = new Set(selectedEntries);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      if (newSelected.size >= maxSelectionLimit) {
        alert(`You can select a maximum of ${maxSelectionLimit} records.`);
        return;
      }
      newSelected.add(id);
    }
    setSelectedEntries(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedEntries.size === entries.length) {
      setSelectedEntries(new Set());
    } else {
      const allIds = entries.map(entry => entry._id);
      if (allIds.length > maxSelectionLimit) {
        alert(`You can select a maximum of ${maxSelectionLimit} records at a time.`);
        setSelectedEntries(new Set(allIds.slice(0, maxSelectionLimit)));
      } else {
        setSelectedEntries(new Set(allIds));
      }
    }
  };

  const handleBulkDelete = async () => {
    if (selectedEntries.size === 0) {
      return;
    }

    const count = selectedEntries.size;
    if (!confirm(`Are you sure you want to delete ${count} ${count === 1 ? 'entry' : 'entries'}? This action cannot be undone.`)) {
      return;
    }

    setIsDeleting(true);
    try {
      const ids = Array.from(selectedEntries);
      let successCount = 0;
      let failCount = 0;

      // Delete entries one by one
      for (const id of ids) {
        try {
          const response = await fetch('/api/admin/entries', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ id }),
          });

          if (response.ok) {
            successCount++;
          } else if (response.status === 401) {
            router.push('/admin');
            return;
          } else {
            failCount++;
          }
        } catch (error) {
          failCount++;
        }
      }

      // Refresh the current page and clear selection
      await fetchEntries(currentPage, true);

      if (failCount > 0) {
        alert(`Deleted ${successCount} ${successCount === 1 ? 'entry' : 'entries'}. ${failCount} ${failCount === 1 ? 'entry' : 'entries'} failed to delete.`);
      } else {
        alert(`Successfully deleted ${successCount} ${successCount === 1 ? 'entry' : 'entries'}.`);
      }
    } catch (error) {
      console.error('Error deleting entries:', error);
      alert('Failed to delete entries. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg text-charcoal-gray">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to /admin
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-charcoal-gray">Admin Panel - Leads</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-semibold"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-charcoal-gray">
              Form Submissions ({totalCount})
            </h2>
            {selectedEntries.size > 0 && (
              <p className="text-sm text-gray-600 mt-1">
                {selectedEntries.size} {selectedEntries.size === 1 ? 'entry' : 'entries'} selected
                {selectedEntries.size >= maxSelectionLimit && (
                  <span className="text-orange-600 ml-2">(Maximum {maxSelectionLimit} selections)</span>
                )}
              </p>
            )}
          </div>
          <div className="flex items-center space-x-3">
            {selectedEntries.size > 0 && (
              <button
                onClick={handleBulkDelete}
                disabled={isDeleting}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-semibold disabled:opacity-50"
              >
                {isDeleting ? 'Deleting...' : `Delete Selected (${selectedEntries.size})`}
              </button>
            )}
            <button
              onClick={() => fetchEntries(currentPage)}
              disabled={loadingEntries}
              className="bg-ocean-teal text-white px-4 py-2 rounded-lg hover:bg-ocean-teal-700 transition font-semibold disabled:opacity-50"
            >
              {loadingEntries ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
        </div>

        {loadingEntries && entries.length === 0 ? (
          <div className="text-center py-12 text-charcoal-gray">Loading entries...</div>
        ) : entries.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center text-charcoal-gray">
            No form submissions yet.
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={entries.length > 0 && selectedEntries.size === entries.length}
                        onChange={handleSelectAll}
                        className="h-4 w-4 text-ocean-teal focus:ring-ocean-teal border-gray-300 rounded"
                        title="Select all"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {entries.map((entry) => (
                    <tr key={entry._id} className={`hover:bg-gray-50 ${selectedEntries.has(entry._id) ? 'bg-blue-50' : ''}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={selectedEntries.has(entry._id)}
                          onChange={() => handleSelectEntry(entry._id)}
                          className="h-4 w-4 text-ocean-teal focus:ring-ocean-teal border-gray-300 rounded"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDate(entry.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {entry.firstName} {entry.lastName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <a href={`mailto:${entry.email}`} className="text-ocean-teal hover:underline">
                          {entry.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <a href={`tel:${entry.phone}`} className="text-ocean-teal hover:underline">
                          {entry.phone}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {entry.service}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                        {entry.message || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-3">
                          <Link
                            href={`/admin/leads/${entry._id}`}
                            className="text-ocean-teal hover:text-ocean-teal-700 transition"
                            title="View details"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </Link>
                          <button
                            onClick={() => handleDelete(entry._id)}
                            className="text-red-600 hover:text-red-900 transition"
                            title="Delete entry"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Pagination */}
        {entries.length > 0 && totalPages > 1 && (
          <div className="mt-6 flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1 || loadingEntries}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || loadingEntries}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{(currentPage - 1) * entriesPerPage + 1}</span> to{' '}
                  <span className="font-medium">
                    {Math.min(currentPage * entriesPerPage, totalCount)}
                  </span>{' '}
                  of <span className="font-medium">{totalCount}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1 || loadingEntries}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    // Show first page, last page, current page, and pages around current
                    if (
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          disabled={loadingEntries}
                          className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                            currentPage === pageNum
                              ? 'z-10 bg-ocean-teal border-ocean-teal text-white'
                              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                          } disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                      return (
                        <span
                          key={pageNum}
                          className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                        >
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages || loadingEntries}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

