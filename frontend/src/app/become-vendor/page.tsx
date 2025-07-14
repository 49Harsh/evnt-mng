'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { registerVendor } from '@/api/vendorAPI';
import ConnectionStatus from '@/components/ConnectionStatus';

export default function BecomeVendor() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    services: '',
    cities: '',
    phone: '',
    email: '',
    reason: '',
    accountHolder: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    upiId: '',
    termsAgreed: false
  });

  const [files, setFiles] = useState({
    msmeCert: null,
    gstCert: null,
    fssaiCert: null,
    cancelledCheque: null
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);
  const [connectionIssue, setConnectionIssue] = useState(false);

  // Show/hide FSSAI section based on service selection
  useEffect(() => {
    const isCatering = formData.services === 'Catering';
    const fssaiField = document.getElementById('fssaiSection');
    if (fssaiField) {
      fssaiField.style.display = isCatering ? 'block' : 'none';
    }
  }, [formData.services]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const { name } = e.target;
      setFiles(prev => ({ ...prev, [name]: e.target.files?.[0] }));
      
      // Clear error when file is uploaded
      if (errors[name]) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    // Validate required fields
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.businessName) newErrors.businessName = 'Business name is required';
    if (!formData.services) newErrors.services = 'Service type is required';
    if (!formData.cities) newErrors.cities = 'Cities are required';
    
    // Validate phone (10 digits)
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    
    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    // Validate bank details
    if (!formData.accountHolder) newErrors.accountHolder = 'Account holder name is required';
    if (!formData.bankName) newErrors.bankName = 'Bank name is required';
    if (!formData.accountNumber) newErrors.accountNumber = 'Account number is required';
    if (!formData.ifscCode) newErrors.ifscCode = 'IFSC code is required';
    
    // Validate files
    if (!files.msmeCert) newErrors.msmeCert = 'MSME Certificate is required';
    if (!files.cancelledCheque) newErrors.cancelledCheque = 'Cancelled cheque is required';
    
    // Validate terms
    if (!formData.termsAgreed) newErrors.termsAgreed = 'You must agree to the terms';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      window.scrollTo(0, 0); // Scroll to top to show errors
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await registerVendor(formData, files);
      
      if (response.success) {
        setSubmitResult({
          success: true,
          message: response.message || 'Registration successful! We will contact you soon.'
        });
        
        // Reset form on success
        setFormData({
          fullName: '',
          businessName: '',
          services: '',
          cities: '',
          phone: '',
          email: '',
          reason: '',
          accountHolder: '',
          bankName: '',
          accountNumber: '',
          ifscCode: '',
          upiId: '',
          termsAgreed: false
        });
        
        setFiles({
          msmeCert: null,
          gstCert: null,
          fssaiCert: null,
          cancelledCheque: null
        });
        
        // Scroll to top to show success message
        window.scrollTo(0, 0);
      } else {
        setSubmitResult({
          success: false,
          message: response.message || 'Error submitting form. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setConnectionIssue(true);
      setSubmitResult({
        success: false,
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#fdf8f3] py-10 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 shadow-md rounded-xl">
        <h1 className="text-3xl font-bold text-[#c43c3c] mb-2">Become a Vendor</h1>
        <p className="text-gray-700 mb-6">Join Milan Manch Celebration Pvt. Ltd. and grow your event business with us!</p>

        {/* Show connection status if there's an issue */}
        {connectionIssue && <ConnectionStatus />}

        {submitResult && (
          <div className={`p-4 mb-6 rounded-md ${
            submitResult.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {submitResult.message}
          </div>
        )}

        {Object.keys(errors).length > 0 && (
          <div className="p-4 mb-6 rounded-md bg-red-50 text-red-700">
            <p className="font-semibold">Please fix the following errors:</p>
            <ul className="mt-2 list-disc pl-5">
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1.5">Full Name*</label>
              <input 
                type="text" 
                name="fullName" 
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c] ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1.5">Business Name*</label>
              <input 
                type="text" 
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c] ${
                  errors.businessName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1.5">Type of Services*</label>
              <select 
                name="services" 
                id="serviceType"
                value={formData.services}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c] ${
                  errors.services ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select your service</option>
                <option>Catering</option>
                <option>Decorations</option>
                <option>Photography</option>
                <option>Makeup Artist</option>
                <option>Venue Provider</option>
                <option>Entertainment (DJ/Band/Anchor)</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1.5">Cities You Serve*</label>
              <input 
                type="text" 
                name="cities"
                value={formData.cities}
                onChange={handleChange}
                placeholder="e.g., Agra, Delhi, Mathura" 
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c] ${
                  errors.cities ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1.5">Phone Number*</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}" 
                placeholder="10-digit number" 
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c] ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1.5">Email Address*</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c] ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1.5">Why should we work with you?</label>
              <textarea 
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows={4} 
                placeholder="Tell us in a few words..." 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c]"
              />
            </div>

            {/* License Uploads */}
            <div>
              <label className="block font-semibold mb-1.5">Upload MSME Certificate*</label>
              <input 
                type="file" 
                name="msmeCert"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png" 
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c] ${
                  errors.msmeCert ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, JPG, PNG</p>
            </div>

            <div>
              <label className="block font-semibold mb-1.5">Upload GST Certificate (if applicable)</label>
              <input 
                type="file" 
                name="gstCert"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c]"
              />
              <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, JPG, PNG</p>
            </div>

            <div id="fssaiSection" className="hidden">
              <label className="block font-semibold mb-1.5">Upload FSSAI License (only for Caterers)</label>
              <input 
                type="file" 
                name="fssaiCert"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c]"
              />
              <p className="text-xs text-gray-500 mt-1">Required for food service vendors</p>
            </div>

            {/* Bank Account Details Section */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Bank Account Details</h2>

            <div>
              <label className="block font-semibold mb-1.5">Account Holder Name*</label>
              <input 
                type="text" 
                name="accountHolder"
                value={formData.accountHolder}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c] ${
                  errors.accountHolder ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1.5">Bank Name*</label>
              <input 
                type="text" 
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c] ${
                  errors.bankName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1.5">Account Number*</label>
              <input 
                type="text" 
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c] ${
                  errors.accountNumber ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1.5">IFSC Code*</label>
              <input 
                type="text" 
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c] ${
                  errors.ifscCode ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            
            <div>
              <label className="block font-semibold mb-1.5">Upload Cancelled Cheque (of Current Account)*</label>
              <input 
                type="file" 
                name="cancelledCheque"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png" 
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c] ${
                  errors.cancelledCheque ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, JPG, PNG</p>
            </div>

            <div>
              <label className="block font-semibold mb-1.5">UPI ID (optional)</label>
              <input 
                type="text" 
                name="upiId"
                value={formData.upiId}
                onChange={handleChange}
                placeholder="example@upi" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c43c3c]"
              />
            </div>

            {/* Agreement */}
            <div className="flex items-center mt-4">
              <input 
                type="checkbox" 
                name="termsAgreed"
                checked={formData.termsAgreed}
                onChange={handleCheckbox}
                className={`h-4 w-4 focus:ring-[#c43c3c] mr-2 ${
                  errors.termsAgreed ? 'border-red-500' : ''
                }`}
              />
              <label className="text-sm">I agree to the Terms & Conditions.</label>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#c43c3c] text-white py-3 px-6 rounded-md hover:bg-[#a93030] transition-colors font-medium mt-6 disabled:opacity-70"
            >
              {isSubmitting ? 'Submitting...' : 'Register as Vendor'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 