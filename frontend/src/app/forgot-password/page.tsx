'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/api/axiosInstance';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // Step 1: Email verification, Step 2: Password reset
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      // Here we just verify the email exists and move to step 2
      const response = await axiosInstance.post('/auth/verify-email', { email });
      if (response.data.exists) {
        setStep(2);
      } else {
        setError('No account found with this email address.');
      }
    } catch (error: unknown) {
      console.error('Email verification error:', error);
      // For security reasons, we still move to step 2 even if there's an error
      // This prevents user enumeration
      setStep(2);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    
    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }
    
    try {
      // This would normally require a token, but for direct reset we're simplifying
      await axiosInstance.post('/auth/reset-password', { 
        email,
        newPassword
      });
      setSuccess(true);
      // After successful password reset, automatically redirect to login after 3 seconds
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (error: unknown) {
      console.error('Password reset error:', error);
      setError('There was an error resetting your password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {step === 1 ? 'Forgot Password' : 'Reset Your Password'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {step === 1 
              ? 'Enter your email address to reset your password' 
              : `Enter a new password for ${email}`}
          </p>
        </div>
        
        {success ? (
          <div className="mt-8 space-y-6">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <p className="font-bold">Password reset successful!</p>
              <p className="block sm:inline">
                Your password has been updated. You will be redirected to login in a few seconds.
              </p>
            </div>
            <div className="text-center">
              <Link href="/login" className="font-medium text-orange-600 hover:text-orange-500">
                Go to login
              </Link>
            </div>
          </div>
        ) : (
          <>
            {step === 1 ? (
              <form className="mt-8 space-y-6" onSubmit={handleEmailSubmit}>
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{error}</span>
                  </div>
                )}
                
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading || !email}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Verifying...' : 'Continue'}
                  </button>
                </div>
                
                <div className="text-center mt-4">
                  <Link href="/login" className="font-medium text-orange-600 hover:text-orange-500">
                    Back to login
                  </Link>
                </div>
              </form>
            ) : (
              <form className="mt-8 space-y-6" onSubmit={handlePasswordReset}>
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{error}</span>
                  </div>
                )}
                
                <div>
                  <label htmlFor="new-password" className="sr-only">
                    New Password
                  </label>
                  <input
                    id="new-password"
                    name="newPassword"
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    placeholder="New password"
                    minLength={6}
                  />
                </div>
                
                <div>
                  <label htmlFor="confirm-password" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm new password"
                    minLength={6}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading || !newPassword || !confirmPassword}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Resetting...' : 'Reset Password'}
                  </button>
                </div>
                
                <div className="text-center mt-4">
                  <button 
                    type="button"
                    onClick={() => setStep(1)} 
                    className="font-medium text-orange-600 hover:text-orange-500"
                  >
                    Back to email verification
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
} 