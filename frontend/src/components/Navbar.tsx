'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, logout } = useAuth();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Become a Vendor', href: '/events' },
  ];

  return (
    <nav className="bg-[#412714] shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
         <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-mm.gif"
              alt="EventMaster Logo"
              width={56}
              height={56}
              className="h-14 w-auto"
              unoptimized
            />
            <div className="ml-2">
              <div className="text-xl  text-white font-cinzel-decorative hover:text-[#e7c47b]">MilanManch</div>
              <div className="text-sm text-white font-cinzel-decorative">Celebration</div>
            </div>
          </Link>
        </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/' && pathname?.startsWith(item.href));
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-white hover:text-[#e7c47b] px-3 py-2 text-sm font-medium transition-colors duration-200 relative
                      ${isActive ? 'text-[#e7c47b]' : ''}`}
                  >
                    <span className="relative">
                      {item.name}
                      <span 
                        className={`absolute left-0 bottom-[-4px] h-[2px] bg-[#e7c47b] transition-all duration-300 ease-out
                          ${isActive 
                            ? 'w-full' 
                            : 'w-0 group-hover:w-full'}`}
                        style={{
                          transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                          transformOrigin: 'left',
                        }}
                      />
                    </span>
                    <style jsx>{`
                      .relative:hover span {
                        transform: scaleX(1) !important;
                        width: 100%;
                      }
                    `}</style>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 text-white hover:text-[#e7c47b]"
                >
                  {user.profileImage ? (
                    <Image
                      src={user.profileImage}
                      alt={user.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <User className="h-6 w-6" />
                  )}
                  <span>{user.name}</span>
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="relative text-white hover:text-[#e7c47b] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  <span className="relative">
                    Login
                    <span 
                      className={`absolute left-0 bottom-[-4px] h-[2px] bg-[#e7c47b] transition-all duration-300 ease-out
                        ${pathname === '/login' ? 'w-full' : 'w-0'}`}
                      style={{
                        transform: pathname === '/login' ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                      }}
                    />
                  </span>
                  <style jsx>{`
                    .relative:hover span {
                      transform: scaleX(1) !important;
                      width: 100%;
                    }
                  `}</style>
                </Link>
                <Link
                  href="/register"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#e7c47b] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e7c47b]"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 shadow-lg">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname?.startsWith(item.href));
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-white hover:text-[#e7c47b] block px-3 py-2 text-base font-medium relative
                    ${isActive ? 'text-[#e7c47b]' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative">
                    {item.name}
                    <span 
                      className={`absolute left-0 bottom-[-4px] h-[2px] bg-[#e7c47b] transition-all duration-300 ease-out
                        ${isActive ? 'w-full' : 'w-0'}`}
                      style={{
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                      }}
                    />
                  </span>
                  <style jsx>{`
                    .relative:hover span {
                      transform: scaleX(1) !important;
                      width: 100%;
                    }
                  `}</style>
                </Link>
              );
            })}
            {user ? (
              <>
                <Link
                  href="/profile"
                  className={`text-white hover:text-[#e7c47b] block px-3 py-2 text-base font-medium relative
                    ${pathname === '/profile' ? 'text-[#e7c47b]' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative">
                    Profile
                    <span 
                      className={`absolute left-0 bottom-[-4px] h-[2px] bg-[#e7c47b] transition-all duration-300 ease-out
                        ${pathname === '/profile' ? 'w-full' : 'w-0'}`}
                      style={{
                        transform: pathname === '/profile' ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                      }}
                    />
                  </span>
                  <style jsx>{`
                    .relative:hover span {
                      transform: scaleX(1) !important;
                      width: 100%;
                    }
                  `}</style>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-white hover:text-[#e7c47b] block px-3 py-2 text-base font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`text-white hover:text-[#e7c47b] block px-3 py-2 text-base font-medium relative
                    ${pathname === '/login' ? 'text-[#e7c47b]' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative">
                    Login
                    <span 
                      className={`absolute left-0 bottom-[-4px] h-[2px] bg-[#e7c47b] transition-all duration-300 ease-out
                        ${pathname === '/login' ? 'w-full' : 'w-0'}`}
                      style={{
                        transform: pathname === '/login' ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                      }}
                    />
                  </span>
                  <style jsx>{`
                    .relative:hover span {
                      transform: scaleX(1) !important;
                      width: 100%;
                    }
                  `}</style>
                </Link>
                <Link
                  href="/register"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white block px-3 py-2 rounded-lg text-base font-medium mt-4 mx-3 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;