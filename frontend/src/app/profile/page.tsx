"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import axiosInstance from "@/api/axiosInstance";

// Define user type interface
interface UserProfile {
  name?: string;
  email?: string;
  phone?: string;
  whatsappNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  profileImage?: string;
}

export default function ProfilePage() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    whatsappNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    profileImage: "",
  });
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (user) {
      const userProfile = user as UserProfile;
      setForm({
        name: userProfile.name || "",
        email: userProfile.email || "",
        phone: userProfile.phone || "",
        whatsappNumber: userProfile.whatsappNumber || "",
        address: userProfile.address || "",
        city: userProfile.city || "",
        state: userProfile.state || "",
        zipCode: userProfile.zipCode || "",
        profileImage: userProfile.profileImage || "",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setEditMode(true);
    // Clear any previous messages when entering edit mode
    setError("");
    setSuccess("");
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    // Reset form to original user data
    if (user) {
      const userProfile = user as UserProfile;
      setForm({
        name: userProfile.name || "",
        email: userProfile.email || "",
        phone: userProfile.phone || "",
        whatsappNumber: userProfile.whatsappNumber || "",
        address: userProfile.address || "",
        city: userProfile.city || "",
        state: userProfile.state || "",
        zipCode: userProfile.zipCode || "",
        profileImage: userProfile.profileImage || "",
      });
    }
    // Clear messages
    setError("");
    setSuccess("");
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editMode) return; // Prevent submission if not in edit mode
    
    setLoading(true);
    setError("");
    setSuccess("");
    
    try {
      const formData = { ...form };
      await axiosInstance.put("/users/profile", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setSuccess("Profile updated successfully");
      setEditMode(false);
    } catch (error) {
      console.error('Profile update error:', error);
      setError("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }
    
    try {
      await axiosInstance.put(
        "/users/profile",
        { password: newPassword },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setSuccess("Password changed successfully");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error('Password change error:', error);
      setError("Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <div className="p-8">Please login to view your profile.</div>;

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
          {success}
        </div>
      )}

      <form onSubmit={handleProfileUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            disabled={!editMode} 
            className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              !editMode ? 'bg-gray-50 text-gray-500' : 'bg-white'
            }`}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            name="email" 
            value={form.email} 
            disabled 
            className="w-full border px-3 py-2 rounded bg-gray-100 text-gray-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input 
            name="phone" 
            value={form.phone} 
            onChange={handleChange} 
            disabled={!editMode} 
            className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              !editMode ? 'bg-gray-50 text-gray-500' : 'bg-white'
            }`}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
          <input 
            name="whatsappNumber" 
            value={form.whatsappNumber} 
            onChange={handleChange} 
            disabled={!editMode} 
            className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              !editMode ? 'bg-gray-50 text-gray-500' : 'bg-white'
            }`}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input 
            name="address" 
            value={form.address} 
            onChange={handleChange} 
            disabled={!editMode} 
            className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              !editMode ? 'bg-gray-50 text-gray-500' : 'bg-white'
            }`}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input 
              name="city" 
              value={form.city} 
              onChange={handleChange} 
              disabled={!editMode} 
              className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                !editMode ? 'bg-gray-50 text-gray-500' : 'bg-white'
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input 
              name="state" 
              value={form.state} 
              onChange={handleChange} 
              disabled={!editMode} 
              className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                !editMode ? 'bg-gray-50 text-gray-500' : 'bg-white'
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
            <input 
              name="zipCode" 
              value={form.zipCode} 
              onChange={handleChange} 
              disabled={!editMode} 
              className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                !editMode ? 'bg-gray-50 text-gray-500' : 'bg-white'
              }`}
            />
          </div>
        </div>
      </form>

      {/* Buttons moved outside form to prevent accidental submission */}
      <div className="flex gap-4 mt-6">
        {!editMode ? (
          <button 
            type="button" 
            onClick={handleEditToggle} 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition-colors"
          >
            Edit Profile
          </button>
        ) : (
          <>
            <button 
              type="button"
              onClick={handleProfileUpdate}
              disabled={loading} 
              className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-2 rounded transition-colors"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
            <button 
              type="button" 
              onClick={handleCancelEdit} 
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded transition-colors"
            >
              Cancel
            </button>
          </>
        )}
      </div>

      <hr className="my-8 border-gray-200" />
      
      <form onSubmit={handlePasswordChange} className="space-y-4">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Change Password</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
          <input 
            type="password" 
            value={newPassword} 
            onChange={e => setNewPassword(e.target.value)} 
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter new password"
            minLength={6}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={e => setConfirmPassword(e.target.value)} 
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm new password"
            minLength={6}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading || !newPassword || !confirmPassword} 
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded transition-colors"
        >
          {loading ? 'Changing...' : 'Change Password'}
        </button>
      </form>
    </div>
  );
}