'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from "@/api/axiosInstance";

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

  useEffect(() => {
    // Check for saved token and user data
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      
      // Optional: Fetch fresh user data from API
      const fetchUserData = async () => {
        try {
          const response = await axiosInstance.get('/users/profile', {
            headers: { Authorization: `Bearer ${savedToken}` }
          });
          const userData = response.data;
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
        } catch (error) {
          // Connection errors shouldn't disrupt the user experience
          // Just log them without affecting the user's session
          console.error('Error fetching user data:', error);
          
          // User can still use the site with locally stored data
          // We don't need to logout or show an error to the user
        }
      };
      
      // We can still call fetchUserData, but errors won't affect the user experience
      fetchUserData();
    }
    
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post('/auth/login', {
        email,
        password,
      });
      const data = response.data;
      if (!response.status || response.status >= 400) {
        throw new Error(data.message);
      }
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Get full user profile
      const profileResponse = await axiosInstance.get('/users/profile', {
        headers: { Authorization: `Bearer ${data.token}` }
      });
      setUser(profileResponse.data);
      localStorage.setItem('user', JSON.stringify(profileResponse.data));
    } catch (error: unknown) {
      throw error;
    }
  };

  const register = async (userData: FormData) => {
    try {
      const response = await axiosInstance.post('/auth/register', userData);
      const data = response.data;
      if (!response.status || response.status >= 400) {
        throw new Error(data.message);
      }
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    } catch (error: unknown) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const updateProfile = async (userData: FormData | Record<string, string | Blob>) => {
    try {
      // Prepare headers
      const headers: Record<string, string> = {
        'Authorization': `Bearer ${token}`
      };
      
      let response;
      
      // Check if userData is FormData or a regular object
      if (userData instanceof FormData) {
        response = await axiosInstance.put('/users/profile', userData, { headers });
      } else {
        response = await axiosInstance.put('/users/profile', userData, { headers });
      }
      
      const updatedUser = response.data;
      
      // Merge the updated user data with the existing user data
      // This ensures we don't lose any fields that weren't returned in the response
      const mergedUser = { ...user, ...updatedUser };
      
      setUser(mergedUser as User);
      localStorage.setItem('user', JSON.stringify(mergedUser));
      
      return;
    } catch (error: unknown) {
      throw error;
    }
  };

  const deleteAccount = async () => {
    try {
      const response = await axiosInstance.delete('/users', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.status || response.status >= 400) {
        const data = response.data;
        throw new Error(data.message);
      }
      logout();
    } catch (error: unknown) {
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
