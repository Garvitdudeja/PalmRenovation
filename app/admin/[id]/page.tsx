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
  createdAt: string;
}

export default function EntryDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  
  const [entry, setEntry] = useState<FormEntry | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

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
            href="/admin"
            className="inline-block bg-ocean-teal text-white px-6 py-3 rounded-lg hover:bg-ocean-teal-700 transition font-semibold"
          >
            Back to Admin Panel
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-charcoal-gray">Entry Details</h1>
            <Link
              href="/admin"
              className="bg-ocean-teal text-white px-4 py-2 rounded-lg hover:bg-ocean-teal-700 transition font-semibold"
            >
              Back to Admin Panel
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold text-charcoal-gray">
              Submission Details
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Submitted on {formatDate(entry.createdAt)}
            </p>
          </div>

          <div className="px-6 py-6">
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">First Name</dt>
                <dd className="mt-1 text-sm text-charcoal-gray">{entry.firstName}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">Last Name</dt>
                <dd className="mt-1 text-sm text-charcoal-gray">{entry.lastName || '-'}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-charcoal-gray">
                  <a
                    href={`mailto:${entry.email}`}
                    className="text-ocean-teal hover:underline"
                  >
                    {entry.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-charcoal-gray">
                  <a
                    href={`tel:${entry.phone}`}
                    className="text-ocean-teal hover:underline"
                  >
                    {entry.phone}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-charcoal-gray">{entry.address || '-'}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500">Postal / Zip Code</dt>
                <dd className="mt-1 text-sm text-charcoal-gray">{entry.postalCode || '-'}</dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Service</dt>
                <dd className="mt-1 text-sm text-charcoal-gray">{entry.service}</dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Message</dt>
                <dd className="mt-1 text-sm text-charcoal-gray whitespace-pre-wrap">
                  {entry.message || '-'}
                </dd>
              </div>
            </dl>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
            <Link
              href="/admin"
              className="px-4 py-2 border border-gray-300 rounded-lg text-charcoal-gray hover:bg-gray-100 transition font-semibold"
            >
              Cancel
            </Link>
            <a
              href={`mailto:${entry.email}?subject=Re: Your ${entry.service} Inquiry`}
              className="px-4 py-2 bg-ocean-teal text-white rounded-lg hover:bg-ocean-teal-700 transition font-semibold"
            >
              Reply via Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

