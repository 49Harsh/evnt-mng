import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Become a Vendor', href: '/become-vendor' },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/logo-mm.gif"
                alt="EventMaster Logo"
                width={56}
                height={56}
                className="h-14 w-auto"
              />
              <div className="ml-2">
                <div className="text-xl font-bold text-gray-800">MilanManch</div>
                <div className="text-sm text-gray-600">Celebration</div>
              </div>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              {/* Auth section */}
              {user ? (
                <div className="flex items-center">
                  {user.profileImage && (
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="inline-block h-8 w-8 rounded-full object-cover mr-2 border border-orange-400 align-middle"
                    />
                  )}
                  <span className="text-gray-700 font-semibold px-1 py-2 align-middle">{user.name}</span>
                  <button
                    onClick={logout}
                    className="text-white bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded-md text-sm font-medium ml-2"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200">Login</Link>
                  <Link to="/register" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200">Register</Link>
                </>
              )}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Auth section for mobile */}
            {user ? (
              <>
                <span className="block text-gray-700 font-semibold px-3 py-2">{user.name}</span>
                <button
                  onClick={() => { logout(); setIsMenuOpen(false); }}
                  className="w-full text-white bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded-md text-base font-medium mt-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block text-gray-700 hover:text-orange-500 px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Login</Link>
                <Link to="/register" className="block text-gray-700 hover:text-orange-500 px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
