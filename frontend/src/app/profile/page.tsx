"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import axiosInstance from "@/api/axiosInstance";
import Image from "next/image";

// Define user type interface
interface UserProfile {
  id?: string;
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
  const { user, token } = useAuth();
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
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Fetch complete user profile on load
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (token) {
        try {
          const response = await axiosInstance.get('/users/profile', {
            headers: { Authorization: `Bearer ${token}` }
          });
          
          const userProfile = response.data;
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
        } catch (err) {
          console.error("Error fetching user profile:", err);
        }
      }
    };

    fetchUserProfile();
  }, [token]);

  // Fallback to context user if API call fails
  useEffect(() => {
    if (user && !form.name) {
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
  }, [user, form.name]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
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
    // Clear messages and image preview
    setError("");
    setSuccess("");
    setImagePreview(null);
    setImageFile(null);
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editMode) return; // Prevent submission if not in edit mode
    
    setLoading(true);
    setError("");
    setSuccess("");
    
    try {
      const formData = new FormData();
      
      // Add all form fields to FormData
      Object.entries(form).forEach(([key, value]) => {
        if (value && key !== 'profileImage') formData.append(key, value.toString());
      });
      
      // Add image if a new one was selected
      if (imageFile) {
        formData.append('profileImage', imageFile);
      }
      
      await axiosInstance.put("/users/profile", formData, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      });
      setSuccess("Profile updated successfully");
      setEditMode(false);
      
      // Refresh user data
      const response = await axiosInstance.get('/users/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      const userProfile = response.data;
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
      
      // Clear image preview
      setImagePreview(null);
      setImageFile(null);
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
      // Send only the password field to ensure proper handling
      await axiosInstance.put(
        "/users/profile",
        { password: newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
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

      {/* Profile Image */}
      <div className="mb-8 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-100 flex items-center justify-center border">
          {(imagePreview || form.profileImage) ? (
            <Image 
              src={imagePreview || form.profileImage || ''} 
              alt="Profile" 
              width={128} 
              height={128} 
              className="object-cover w-full h-full"
              unoptimized={!!imagePreview} // Unoptimized for local previews
            />
          ) : (
            <div className="text-gray-400 text-6xl">👤</div>
          )}
        </div>
        
        {editMode && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold
                file:bg-orange-50 file:text-orange-700
                hover:file:bg-orange-100"
            />
          </div>
        )}
      </div>

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
      
      {/* Password Change Form */}
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