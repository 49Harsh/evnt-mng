import axios from 'axios';
import axiosInstance from './axiosInstance';

interface VendorFormData {
  fullName: string;
  businessName: string;
  services: string;
  cities: string;
  phone: string;
  email: string;
  reason: string;
  accountHolder: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  upiId?: string;
  termsAgreed: boolean;
}

interface FileData {
  msmeCert: File | null;
  gstCert: File | null;
  fssaiCert: File | null;
  cancelledCheque: File | null;
}

interface RegistrationResponse {
  success: boolean;
  message: string;
  vendor?: {
    id: string;
    fullName: string;
    businessName: string;
    email: string;
    status: string;
  };
  error?: string;
}

export const registerVendor = async (
  formData: VendorFormData,
  files: FileData
): Promise<RegistrationResponse> => {
  try {
    // Create form data for multipart/form-data
    const submitData = new FormData();
    
    // Add text fields
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== undefined) {
        submitData.append(key, value.toString());
      }
    });
    
    // Add files
    Object.entries(files).forEach(([key, file]) => {
      if (file) {
        submitData.append(key, file);
      }
    });
    
    const response = await axiosInstance.post('/vendor/register', submitData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as RegistrationResponse;
    }
    
    return {
      success: false,
      message: 'Network error or server is unavailable',
      error: 'Failed to connect to server'
    };
  }
};

export const checkVendorStatus = async (
  vendorId: string
): Promise<{
  success: boolean;
  vendorStatus?: {
    _id: string;
    fullName: string;
    businessName: string;
    status: string;
    createdAt: string;
  };
  message?: string;
}> => {
  try {
    const response = await axiosInstance.get(`/vendor/status/${vendorId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }
    
    return {
      success: false,
      message: 'Failed to fetch vendor status'
    };
  }
}; 