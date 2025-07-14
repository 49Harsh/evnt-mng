import axiosInstance from '@/api/axiosInstance';
import axios, { AxiosError } from 'axios';

interface ConnectionStatus {
  isConnected: boolean;
  message: string;
}

/**
 * Check if the backend server is available
 * @returns Promise with connection status
 */
export const checkServerConnection = async (): Promise<ConnectionStatus> => {
  try {
    // Attempt to ping the server with a timeout
    await axiosInstance.get('/health', { timeout: 5000 });
    return {
      isConnected: true,
      message: 'Connected to server successfully'
    };
  } catch (error: unknown) {
    console.error('Server connection error:', error);
    
    const axiosError = error as AxiosError;
    
    // Determine the specific error type
    if (axiosError.code === 'ECONNREFUSED' || 
        (axiosError.message && axiosError.message.includes('Network Error'))) {
      return {
        isConnected: false,
        message: 'Cannot connect to the server. Make sure the backend server is running on port 5000.'
      };
    }
    
    if (axiosError.code === 'ECONNABORTED' || 
        (axiosError.message && axiosError.message.includes('timeout'))) {
      return {
        isConnected: false,
        message: 'Connection to server timed out. The server may be overloaded or unreachable.'
      };
    }
    
    return {
      isConnected: false,
      message: 'Error connecting to server. Please check your network connection.'
    };
  }
};

/**
 * Get troubleshooting steps for connection issues
 */
export const getTroubleshootingSteps = (): string[] => {
  return [
    'Make sure the backend server is running (npm run dev or node server.js in the backend directory)',
    'Check if the server is running on the correct port (default: 5000)',
    'Ensure your network allows connections to localhost:5000',
    'Verify that your .env file has the correct MONGODB_URI and other required variables',
    'Try restarting the backend server',
    'If using a VPN, try disabling it temporarily',
    'Check for any firewall or antivirus software that might be blocking the connection'
  ];
};

/**
 * Log connection details for debugging
 */
export const logConnectionDetails = () => {
  // Get base URL from axios instance
  const baseURL = axiosInstance.defaults.baseURL;
  
  console.log('==== Connection Details ====');
  console.log(`Base URL: ${baseURL}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`Running on: ${typeof window !== 'undefined' ? window.location.hostname : 'server'}`);
  
  // Check for token
  const hasToken = !!localStorage.getItem('token');
  console.log(`Auth token present: ${hasToken}`);
  
  if (hasToken) {
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    if (tokenExpiration) {
      const expirationDate = new Date(parseInt(tokenExpiration, 10));
      const now = new Date();
      console.log(`Token expires: ${expirationDate.toLocaleString()}`);
      console.log(`Current time: ${now.toLocaleString()}`);
      console.log(`Token expired: ${now > expirationDate ? 'Yes' : 'No'}`);
    }
  }
  
  console.log('==========================');
}; 