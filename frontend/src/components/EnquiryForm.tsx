import { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '@/api/axiosInstance';

interface EnquiryFormProps {
  serviceType?: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const EnquiryForm = ({ serviceType = '', onSuccess, onCancel }: EnquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    whatsappNumber: '',
    isSameAsPhone: false,
    email: '',
    address: '',
    location: {
      type: 'Point',
      coordinates: [0, 0]
    },
    serviceType: serviceType,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Update service type if prop changes
    if (serviceType) {
      setFormData(prev => ({ ...prev, serviceType }));
    }
  }, [serviceType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: checked,
      // If the checkbox is checked, set WhatsApp number to phone number
      ...(name === 'isSameAsPhone' && checked ? { whatsappNumber: prev.phoneNumber } : {})
    }));
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData(prev => ({
          ...prev,
          location: {
            type: 'Point',
            coordinates: [longitude, latitude]
          }
        }));
        // Also try to get the address from coordinates using reverse geocoding
        fetchAddressFromCoordinates(latitude, longitude);
      },
      () => {
        setError('Unable to retrieve your location. Please enter your address manually.');
      }
    );
  };

  const fetchAddressFromCoordinates = async (latitude: number, longitude: number) => {
    try {
      // We use axios directly here since this is an external API call, not to our backend
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      
      if (response.data && response.data.display_name) {
        setFormData(prev => ({
          ...prev,
          address: response.data.display_name
        }));
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      // If WhatsApp number is same as phone, use phone number
      const dataToSubmit = {
        ...formData,
        whatsappNumber: formData.isSameAsPhone ? formData.phoneNumber : formData.whatsappNumber
      };

      const response = await axiosInstance.post('/api/enquiry', dataToSubmit);
      
      setSuccess('Enquiry submitted successfully! We will contact you soon.');
      setFormData({
        name: '',
        phoneNumber: '',
        whatsappNumber: '',
        isSameAsPhone: false,
        email: '',
        address: '',
        location: {
          type: 'Point',
          coordinates: [0, 0]
        },
        serviceType: serviceType,
        message: ''
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to submit enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Request Information</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
          {success}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b6810c]"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b6810c]"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b6810c]"
            />
          </div>
          
          <div>
            <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-1">
              WhatsApp Number *
            </label>
            <div className="flex items-center">
              <input
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                value={formData.isSameAsPhone ? formData.phoneNumber : formData.whatsappNumber}
                onChange={handleChange}
                required
                disabled={formData.isSameAsPhone}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b6810c]"
              />
            </div>
            <div className="mt-1 flex items-center">
              <input
                type="checkbox"
                id="isSameAsPhone"
                name="isSameAsPhone"
                checked={formData.isSameAsPhone}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-[#b6810c] focus:ring-[#b6810c] border-gray-300 rounded"
              />
              <label htmlFor="isSameAsPhone" className="ml-2 text-sm text-gray-600">
                Same as phone number
              </label>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Address *
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b6810c]"
            />
            <button
              type="button"
              onClick={handleGetLocation}
              className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md flex-shrink-0 transition duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Click the location icon to use your current location or enter manually
          </p>
        </div>
        
        <div className="mb-4">
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
            Service Type *
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b6810c]"
          >
            <option value="" disabled>Select a service</option>
            <option value="wedding">Wedding Planning</option>
            <option value="corporate">Corporate Events</option>
            <option value="social">Social Gatherings</option>
            <option value="private">Private Parties</option>
            <option value="cultural">Cultural Events</option>
            <option value="concerts">Concert & Shows</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b6810c]"
            placeholder="Tell us more about your event requirements..."
          ></textarea>
        </div>
        
        <div className="flex justify-end space-x-3">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-300"
              disabled={isSubmitting}
            >
              Cancel
            </button>
          )}
          
          <button
            type="submit"
            className="px-4 py-2 bg-[#b6810c] text-white rounded-md hover:bg-[#96690a] transition-colors duration-300 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm; 