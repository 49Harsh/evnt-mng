import React, { useState } from 'react';
import UserList from '../components/UserList';
import ContactList from '../components/ContactList';

const SidebarDashboard = ({ onLogout, user }) => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col py-8 px-4">
        <h2 className="text-xl font-bold mb-8 text-center">Admin Panel</h2>
        
        {/* User Info */}
        {user && (
          <div className="mb-6 p-4 bg-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              {user.profileImage ? (
                <img 
                  src={user.profileImage} 
                  alt={user.name} 
                  className="w-8 h-8 rounded-full mr-3" 
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-500 mr-3 flex items-center justify-center">
                  <span className="text-xs">{user.name?.charAt(0) || 'U'}</span>
                </div>
              )}
              <div>
                <div className="text-sm font-medium">{user.name}</div>
                <div className="text-xs text-gray-300">{user.email}</div>
              </div>
            </div>
          </div>
        )}
        
        <button
          className={`mb-4 py-2 px-4 rounded text-left ${activeTab === 'users' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
        <button
          className={`py-2 px-4 rounded text-left ${activeTab === 'contacts' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
          onClick={() => setActiveTab('contacts')}
        >
          Contacts
        </button>
        
        {/* Logout Button */}
        <div className="mt-auto pt-4">
          <button
            onClick={onLogout}
            className="w-full py-2 px-4 rounded text-left bg-red-600 hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-8">
        {activeTab === 'users' && <UserList />}
        {activeTab === 'contacts' && <ContactList />}
      </div>
    </div>
  );
};

export default SidebarDashboard;
