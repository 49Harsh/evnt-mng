'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from "@/api/axiosInstance";

interface User {
  id: string;
  name: string;
  email: string;
  profileImage: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: FormData) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: FormData) => Promise<void>;
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
    }
    
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post('/api/auth/login', {
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
    } catch (error: any) {
      throw error;
    }
  };

  const register = async (userData: FormData) => {
    try {
      const response = await axiosInstance.post('/api/auth/register', userData);
      const data = response.data;
      if (!response.status || response.status >= 400) {
        throw new Error(data.message);
      }
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    } catch (error: any) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const updateProfile = async (userData: FormData) => {
    try {
      const response = await axiosInstance.put('/api/users/profile', userData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = response.data;
      if (!response.status || response.status >= 400) {
        throw new Error(data.message);
      }
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
    } catch (error: any) {
      throw error;
    }
  };

  const deleteAccount = async () => {
    try {
      const response = await axiosInstance.delete('/api/users', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.status || response.status >= 400) {
        const data = response.data;
        throw new Error(data.message);
      }
      logout();
    } catch (error: any) {
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
