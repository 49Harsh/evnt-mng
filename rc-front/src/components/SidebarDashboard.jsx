import React, { useState } from 'react';
import UserList from '../components/UserList';
import ContactList from '../components/ContactList';

const SidebarDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col py-8 px-4">
        <h2 className="text-xl font-bold mb-8 text-center">Admin Panel</h2>
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
