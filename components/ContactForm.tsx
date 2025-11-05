'use client';

import { useState } from 'react';

interface ContactFormProps {
  variant?: 'default' | 'light';
}

export default function ContactForm({ variant = 'default' }: ContactFormProps) {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const isLight = variant === 'light';
  const bgClass = isLight ? 'bg-white' : 'bg-white';
  const textClass = isLight ? 'text-charcoal-gray' : 'text-charcoal-gray';

  return (
    <form onSubmit={handleSubmit} className={`${bgClass} ${textClass} p-8 rounded-lg shadow-lg`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block text-charcoal-gray font-semibold mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal transition"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-charcoal-gray font-semibold mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-charcoal-gray font-semibold mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal transition"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-charcoal-gray font-semibold mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal transition"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-charcoal-gray font-semibold mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal transition"
          />
        </div>
        <div>
          <label htmlFor="postalCode" className="block text-charcoal-gray font-semibold mb-2">
            Postal / Zip Code
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal transition"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="service" className="block text-charcoal-gray font-semibold mb-2">
          Service <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
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
          <option value="design-architectural-planning">Design & Architectural Planning</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-charcoal-gray font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={180}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-teal focus:border-ocean-teal transition resize-none"
        />
        <p className="text-sm text-gray-500 mt-2">{formData.message.length} / 180</p>
      </div>
      <button
        type="submit"
        className="w-full bg-ocean-teal text-white py-4 rounded-lg hover:bg-ocean-teal-700 transition font-semibold text-lg shadow-lg hover:shadow-xl"
      >
        Submit
      </button>
    </form>
  );
}
