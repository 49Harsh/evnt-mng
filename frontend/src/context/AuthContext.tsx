'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axiosInstance from "@/api/axiosInstance";
import axios from 'axios'; // Added missing import for axios.isAxiosError

interface User {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  phone?: string;
  whatsappNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  [key: string]: string | undefined; // To accommodate any other string fields
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: FormData) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: FormData | Record<string, string | Blob>) => Promise<void>;
  deleteAccount: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Get token expiration time (stored separately)
  const getTokenExpiration = (): number | null => {
    const expiration = localStorage.getItem('tokenExpiration');
    return expiration ? parseInt(expiration, 10) : null;
  };

  // Check if token is expired
  const isTokenExpired = useCallback((): boolean => {
    const expiration = getTokenExpiration();
    if (!expiration) return true;
    // Return true if current time is past expiration (with 5s buffer)
    return Date.now() > expiration - 5000;
  }, []); // No dependencies needed as it only uses localStorage

  // Set token with expiration
  const setTokenWithExpiration = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
    
    // Set expiration to 2 days from now (in milliseconds)
    const expiresAt = Date.now() + 2 * 24 * 60 * 60 * 1000;
    localStorage.setItem('tokenExpiration', expiresAt.toString());
  };

  useEffect(() => {
    // Check for saved token and user data
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (savedToken && savedUser) {
      // Check if token is expired
      if (isTokenExpired()) {
        // If token is expired, clear everything
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('tokenExpiration');
        setLoading(false);
        return;
      }
      
      // Token is still valid
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      
      // Set the token in axios defaults for all requests
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`;
      
      // Fetch fresh user data from API in background
      const fetchUserData = async () => {
        try {
          const response = await axiosInstance.get('/users/profile');
          const userData = response.data;
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Only logout if it's an auth error (401)
          if (axios.isAxiosError(error) && error.response?.status === 401) {
            logout();
          }
        }
      };
      
      fetchUserData();
    }
    
    setLoading(false);
  }, [isTokenExpired]); // Added isTokenExpired to dependencies

  const login = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post('/auth/login', {
        email,
        password,
      });
      
      const data = response.data;
      // The backend returns { token, user } directly without a success field
      if (!data.token || !data.user) {
        throw new Error(data.message || 'Login failed');
      }
      
      // Set user data
      setUser(data.user);
      
      // Set token with expiration
      setTokenWithExpiration(data.token);
      
      // Set the token in axios defaults
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      
      // Store user data
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Get full user profile if needed
      try {
        const profileResponse = await axiosInstance.get('/users/profile');
        const fullUser = profileResponse.data;
        setUser(fullUser);
        localStorage.setItem('user', JSON.stringify(fullUser));
      } catch (profileError) {
        console.error('Error fetching full profile:', profileError);
        // Continue with login even if profile fetch fails
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
      if (axios.isAxiosError(error) && error.response) {
        // Get the error message from the response if available
        throw new Error(error.response.data?.message || 'Login failed');
      }
      throw error;
    }
  };

  const register = async (userData: FormData) => {
    try {
      const response = await axiosInstance.post('/auth/register', userData);
      const data = response.data;
      
      // Backend returns { token, user } directly without a success field
      if (!data.token || !data.user) {
        throw new Error(data.message || 'Registration failed');
      }
      
      // Set user data
      setUser(data.user);
      
      // Set token with expiration
      setTokenWithExpiration(data.token);
      
      // Set token in axios defaults
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      
      // Store user data
      localStorage.setItem('user', JSON.stringify(data.user));
    } catch (error: unknown) {
      console.error('Registration error:', error);
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data?.message || 'Registration failed');
      }
      throw error;
    }
  };

  const logout = () => {
    // Clear auth data
    setUser(null);
    setToken(null);
    
    // Remove auth header
    delete axiosInstance.defaults.headers.common['Authorization'];
    
    // Clear local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('tokenExpiration');
  };

  const updateProfile = async (userData: FormData | Record<string, string | Blob>) => {
    try {
      const response = await axiosInstance.put('/users/profile', userData);
      const updatedUser = response.data;
      
      // Check if response contains user data
      if (!updatedUser) {
        throw new Error('Profile update failed');
      }
      
      // Merge the updated user data with the existing user data
      const mergedUser = { ...user, ...updatedUser };
      
      setUser(mergedUser as User);
      localStorage.setItem('user', JSON.stringify(mergedUser));
      
      return;
    } catch (error: unknown) {
      console.error('Update profile error:', error);
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data?.message || 'Update profile failed');
      }
      throw error;
    }
  };

  const deleteAccount = async () => {
    try {
      const response = await axiosInstance.delete('/users');
      
      // Check if response is successful
      if (response.status >= 400) {
        throw new Error(response.data?.message || 'Failed to delete account');
      }
      
      logout();
    } catch (error: unknown) {
      console.error('Delete account error:', error);
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data?.message || 'Delete account failed');
      }
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      token,
      loading,
      login,
      register,
      logout,
      updateProfile,
      deleteAccount,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
