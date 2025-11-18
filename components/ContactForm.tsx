'use client';

import { useState, useId } from 'react';
import { useRouter } from 'next/navigation';

interface ContactFormProps {
  variant?: 'default' | 'light';
}

export default function ContactForm({ variant = 'default' }: ContactFormProps) {
  const router = useRouter();
  // Generate unique ID prefix to avoid conflicts when multiple forms are on the same page
  const uniqueId = useId();
  const formId = `contact-form-${variant}-${uniqueId}`;
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to thank you page
        router.push('/thank-you');
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit form. Please try again.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLight = variant === 'light';
  const bgClass = isLight ? 'bg-white' : 'bg-white';
  const textClass = isLight ? 'text-charcoal-gray' : 'text-charcoal-gray';

  return (
    <form onSubmit={handleSubmit} className={`${bgClass} ${textClass} p-8 rounded-lg shadow-lg`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 py-20">
        <div>
          <label htmlFor={`${formId}-firstName`} className="block text-charcoal-gray font-semibold mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id={`${formId}-firstName`}
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal transition"
          />
        </div>
        <div>
          <label htmlFor={`${formId}-lastName`} className="block text-charcoal-gray font-semibold mb-2">
            Last Name
          </label>
          <input
            type="text"
            id={`${formId}-lastName`}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal transition"
          />
        </div>
        <div>
          <label htmlFor={`${formId}-email`} className="block text-charcoal-gray font-semibold mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id={`${formId}-email`}
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal transition"
          />
        </div>
        <div>
          <label htmlFor={`${formId}-phone`} className="block text-charcoal-gray font-semibold mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id={`${formId}-phone`}
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal transition"
          />
        </div>
        <div>
          <label htmlFor={`${formId}-address`} className="block text-charcoal-gray font-semibold mb-2">
            Address
          </label>
          <input
            type="text"
            id={`${formId}-address`}
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal transition"
          />
        </div>
        <div>
          <label htmlFor={`${formId}-postalCode`} className="block text-charcoal-gray font-semibold mb-2">
            Postal / Zip Code
          </label>
          <input
            type="text"
            id={`${formId}-postalCode`}
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal transition"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor={`${formId}-service`} className="block text-charcoal-gray font-semibold mb-2">
          Service <span className="text-red-500">*</span>
        </label>
        <select
          id={`${formId}-service`}
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal transition"
        >
          <option value="">Select Service</option>
          <option value="kitchen-remodeling">Kitchen Remodeling</option>
          <option value="bathroom-remodeling">Bathroom Remodeling</option>
          <option value="room-addition">Room Addition</option>
          <option value="complete-home-remodeling">Complete Home Remodeling</option>
          <option value="complete-home-remodeling">Roofing</option>
          <option value="design-architectural-planning">Design & Architectural Planning</option>
          <option value="impact-windows-doors">Impact Windows and Doors</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor={`${formId}-message`} className="block text-charcoal-gray font-semibold mb-2">
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          maxLength={180}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal transition resize-none"
        />
        <p className="text-sm text-gray-500 mt-2">{formData.message.length} / 180</p>
      </div>
      {submitStatus.type && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-ocean-teal text-white py-4 rounded-lg hover:bg-ocean-teal-700 transition font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
