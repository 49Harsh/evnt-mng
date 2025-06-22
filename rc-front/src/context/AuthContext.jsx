import { createContext, useContext, useState, useEffect } from 'react';
import React from 'react';
import api from '../api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post('/api/auth/login', { email, password });
      const data = response.data;
      if (!response.status || response.status >= 400) {
        throw new Error(data.message);
      }
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await api.post('/api/auth/register', userData);
      const data = response.data;
      if (!response.status || response.status >= 400) {
        throw new Error(data.message);
      }
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const updateProfile = async (userData) => {
    try {
      const response = await api.put('/api/users/profile', userData, {
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
    } catch (error) {
      throw error;
    }
  };

  const deleteAccount = async () => {
    try {
      const response = await api.delete('/api/users', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.status || response.status >= 400) {
        const data = response.data;
        throw new Error(data.message);
      }
      logout();
    } catch (error) {
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
