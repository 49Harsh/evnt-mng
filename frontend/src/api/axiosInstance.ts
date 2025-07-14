import axios from "axios";

// // Determine the base URL based on environment
// const isDevelopment = process.env.NODE_ENV === 'development' || 
//                      typeof window !== 'undefined' && 
//                      window.location.hostname === 'localhost';

// const baseURL = isDevelopment
//   ? "http://localhost:5000"
//   : "https://milanmanch.com/api";
// const baseURL = "https://localhost:5000"; 
// For development, you can use localhost directly
const baseURL = "https://milanmanch.com/api"
const instance = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 10000, // 10 second timeout
});

// Request interceptor to add the auth token
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    
    // If token exists, add it to the headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling common errors
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle token expiration (401 unauthorized)
    if (error.response && error.response.status === 401) {
      // Clear stored auth data if token is invalid or expired
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Redirect to login page if in browser context
      if (typeof window !== 'undefined') {
        // Check if we're not already on the login page to avoid redirect loops
        if (!window.location.pathname.includes('/login')) {
          window.location.href = '/login';
        }
      }
    }
    
    return Promise.reject(error);
  }
);

export default instance;
