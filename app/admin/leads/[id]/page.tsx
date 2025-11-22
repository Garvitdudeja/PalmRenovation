'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
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
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
  utmTerm?: string | null;
  utmContent?: string | null;
  gclid?: string | null;
  isGoogleAds?: boolean;
}

const leadStatusOptions = ['New', 'Contacted', 'Qualified', 'Proposal', 'Negotiation', 'Won', 'Lost', 'Irrelevant'];

export default function EntryDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  
  const [entry, setEntry] = useState<FormEntry | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'timeline'>('overview');

  useEffect(() => {
    if (id) {
      fetchEntry();
    }
  }, [id]);

  const fetchEntry = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/admin/entries/${id}`, {
        credentials: 'include',
      });
      
      if (response.status === 401) {
        router.push('/admin');
        return;
      }

      if (response.ok) {
        const data = await response.json();
        setEntry(data.entry);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to load entry');
      }
    } catch (error) {
      console.error('Error fetching entry:', error);
      setError('Failed to load entry');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!entry) return;

    if (!confirm('Are you sure you want to delete this entry? This action cannot be undone.')) {
      return;
    }

    setIsDeleting(true);
    try {
      const response = await fetch('/api/admin/entries', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ id: entry._id }),
      });

      if (response.ok) {
        router.push('/admin/leads');
      } else if (response.status === 401) {
        router.push('/admin');
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to delete entry');
        setIsDeleting(false);
      }
    } catch (error) {
      console.error('Error deleting entry:', error);
      alert('Failed to delete entry. Please try again.');
      setIsDeleting(false);
    }
  };

  const handleStatusChange = async (newStatus: string) => {
    if (!entry) return;

    setIsUpdating(true);
    try {
      const response = await fetch(`/api/admin/entries/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ leadStatus: newStatus }),
      });

      if (response.ok) {
        setEntry({ ...entry, leadStatus: newStatus });
      } else if (response.status === 401) {
        router.push('/admin');
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to update lead status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update lead status. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getInitials = (firstName: string, lastName: string) => {
    const first = firstName?.charAt(0).toUpperCase() || '';
    const last = lastName?.charAt(0).toUpperCase() || '';
    return first + last || 'L';
  };

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'New': 'bg-blue-100 text-blue-800',
      'Contacted': 'bg-yellow-100 text-yellow-800',
      'Qualified': 'bg-green-100 text-green-800',
      'Proposal': 'bg-purple-100 text-purple-800',
      'Negotiation': 'bg-orange-100 text-orange-800',
      'Won': 'bg-emerald-100 text-emerald-800',
      'Lost': 'bg-gray-100 text-gray-800',
      'Irrelevant': 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg text-charcoal-gray">Loading...</div>
      </div>
    );
  }

  if (error || !entry) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-charcoal-gray mb-4">Error</h1>
          <p className="text-gray-600 mb-6">{error || 'Entry not found'}</p>
          <Link
            href="/admin/leads"
            className="inline-block bg-ocean-teal text-white px-6 py-3 rounded-lg hover:bg-ocean-teal-700 transition font-semibold"
          >
            Back to Leads
          </Link>
        </div>
      </div>
    );
  }

  const leadName = `${entry.firstName} ${entry.lastName}`.trim() || 'Lead';
  const initials = getInitials(entry.firstName, entry.lastName);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <Link
              href="/admin/leads"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-semibold text-lg">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-base font-semibold text-charcoal-gray truncate">{leadName}</h2>
            </div>
          </div>
          <button className="text-sm text-ocean-teal hover:text-ocean-teal-700 transition">
            Add Tags
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Related List</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-700 hover:text-ocean-teal transition cursor-pointer">Notes</li>
              <li className="text-sm text-gray-700 hover:text-ocean-teal transition cursor-pointer">Connected Records</li>
              <li className="text-sm text-gray-700 hover:text-ocean-teal transition cursor-pointer">Messages</li>
              <li className="text-sm text-gray-700 hover:text-ocean-teal transition cursor-pointer">Attachments</li>
              <li className="text-sm text-gray-700 hover:text-ocean-teal transition cursor-pointer">Products</li>
              <li className="text-sm text-gray-700 hover:text-ocean-teal transition cursor-pointer">Open Activities</li>
              <li className="text-sm text-gray-700 hover:text-ocean-teal transition cursor-pointer">Closed Activities</li>
              <li className="text-sm text-gray-700 hover:text-ocean-teal transition cursor-pointer">Emails</li>
              <li className="text-sm text-gray-700 hover:text-ocean-teal transition cursor-pointer">Campaigns</li>
            </ul>
            <button className="text-sm text-ocean-teal hover:text-ocean-teal-700 transition mt-3">
              Add Related List
            </button>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Links</h3>
            <p className="text-sm text-gray-500 mb-2">No Links Found</p>
            <button className="text-sm text-ocean-teal hover:text-ocean-teal-700 transition">
              Add Link
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Action Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <a
                href={`mailto:${entry.email}?subject=Re: Your ${entry.service} Inquiry`}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-sm"
              >
                Send Email
              </a>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-semibold text-sm">
                Convert
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-semibold text-sm">
                Edit
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold text-sm disabled:opacity-50"
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
            <div className="text-sm text-gray-500">
              Last Update: {formatDate(entry.createdAt)}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-gray-200 px-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition ${
                activeTab === 'overview'
                  ? 'border-ocean-teal text-ocean-teal'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition ${
                activeTab === 'timeline'
                  ? 'border-ocean-teal text-ocean-teal'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Timeline
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {activeTab === 'overview' && (
            <div className="max-w-5xl">
              {/* Collapsible Details Section */}
              <div className="bg-white rounded-lg shadow mb-6">
                <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-charcoal-gray">Details</h3>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-sm text-ocean-teal hover:text-ocean-teal-700 transition"
                  >
                    {showDetails ? 'Hide Details' : 'Show Details'}
                  </button>
                </div>
                {showDetails && (
                  <div className="px-6 py-4">
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Lead Owner</dt>
                        <dd className="mt-1 text-sm text-charcoal-gray">Admin</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Email</dt>
                        <dd className="mt-1 text-sm text-charcoal-gray">
                          <a href={`mailto:${entry.email}`} className="text-ocean-teal hover:underline">
                            {entry.email}
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Mobile</dt>
                        <dd className="mt-1 text-sm text-charcoal-gray flex items-center">
                          <a href={`tel:${entry.phone}`} className="text-charcoal-gray hover:text-ocean-teal">
                            {entry.phone}
                          </a>
                          <svg className="w-4 h-4 text-green-600 ml-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Lead Status</dt>
                        <dd className="mt-1 flex items-center space-x-2">
                          <select
                            value={entry.leadStatus}
                            onChange={(e) => handleStatusChange(e.target.value)}
                            disabled={isUpdating}
                            className="text-sm px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal bg-white"
                          >
                            {leadStatusOptions.map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getStatusColor(entry.leadStatus)}`}>
                            {entry.leadStatus}
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                )}
              </div>

              {/* Lead Information Section */}
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-charcoal-gray">Lead Information</h3>
                </div>
                <div className="px-6 py-6">
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <dt className="text-sm font-medium text-gray-500 mb-1">Lead Name</dt>
                      <dd className="text-sm text-charcoal-gray">{leadName}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 mb-1">Email</dt>
                      <dd className="text-sm text-charcoal-gray">
                        <a href={`mailto:${entry.email}`} className="text-ocean-teal hover:underline">
                          {entry.email}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 mb-1">Mobile</dt>
                      <dd className="text-sm text-charcoal-gray flex items-center">
                        <a href={`tel:${entry.phone}`} className="text-charcoal-gray hover:text-ocean-teal">
                          {entry.phone}
                        </a>
                        <svg className="w-4 h-4 text-green-600 ml-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 mb-1">Service</dt>
                      <dd className="text-sm text-charcoal-gray">{entry.service}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 mb-1">Address</dt>
                      <dd className="text-sm text-charcoal-gray">{entry.address || '-'}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 mb-1">Postal / Zip Code</dt>
                      <dd className="text-sm text-charcoal-gray">{entry.postalCode || '-'}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 mb-1">Lead Status</dt>
                      <dd className="mt-1">
                        <select
                          value={entry.leadStatus}
                          onChange={(e) => handleStatusChange(e.target.value)}
                          disabled={isUpdating}
                          className="text-sm px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal bg-white"
                        >
                          {leadStatusOptions.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 mb-1">Submitted On</dt>
                      <dd className="text-sm text-charcoal-gray">{formatDate(entry.createdAt)}</dd>
                    </div>
                    <div className="md:col-span-2">
                      <dt className="text-sm font-medium text-gray-500 mb-1">Message</dt>
                      <dd className="text-sm text-charcoal-gray whitespace-pre-wrap">{entry.message || '-'}</dd>
                    </div>
                    {(entry.isGoogleAds || entry.utmSource || entry.gclid) && (
                      <>
                        <div className="md:col-span-2 border-t border-gray-200 pt-4 mt-2">
                          <dt className="text-sm font-semibold text-gray-700 mb-3">Traffic Source</dt>
                          <dd className="space-y-2">
                            {entry.isGoogleAds && (
                              <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Google Ads
                              </div>
                            )}
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              {entry.utmSource && (
                                <div>
                                  <span className="font-medium text-gray-600">Source:</span>
                                  <span className="ml-2 text-charcoal-gray">{entry.utmSource}</span>
                                </div>
                              )}
                              {entry.utmMedium && (
                                <div>
                                  <span className="font-medium text-gray-600">Medium:</span>
                                  <span className="ml-2 text-charcoal-gray">{entry.utmMedium}</span>
                                </div>
                              )}
                              {entry.utmCampaign && (
                                <div>
                                  <span className="font-medium text-gray-600">Campaign:</span>
                                  <span className="ml-2 text-charcoal-gray">{entry.utmCampaign}</span>
                                </div>
                              )}
                              {entry.utmTerm && (
                                <div>
                                  <span className="font-medium text-gray-600">Term:</span>
                                  <span className="ml-2 text-charcoal-gray">{entry.utmTerm}</span>
                                </div>
                              )}
                              {entry.utmContent && (
                                <div>
                                  <span className="font-medium text-gray-600">Content:</span>
                                  <span className="ml-2 text-charcoal-gray">{entry.utmContent}</span>
                                </div>
                              )}
                              {entry.gclid && (
                                <div>
                                  <span className="font-medium text-gray-600">GCLID:</span>
                                  <span className="ml-2 text-charcoal-gray font-mono text-xs">{entry.gclid}</span>
                                </div>
                              )}
                            </div>
                          </dd>
                        </div>
                      </>
                    )}
                  </dl>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="max-w-5xl bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-charcoal-gray mb-4">Timeline</h3>
              <div className="text-sm text-gray-500">
                <p>Lead created on {formatDate(entry.createdAt)}</p>
                {entry.leadStatus !== 'New' && (
                  <p className="mt-2">Status changed to {entry.leadStatus}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
