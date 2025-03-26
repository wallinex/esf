import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Make sure Lucide icons are installed

export default function SignedOutHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Completely isolated toggle function that stops any propagation
  const toggleMenu = (e: React.MouseEvent) => {
    // These prevent the event from bubbling up or triggering default behavior
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(prev => !prev);
  };
  
  // Function to close the menu without preventing navigation
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 z-50">
      {/* Content container with max-width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/images/logo/logo.svg"
              alt="Logo"
              className="h-8 dark:hidden"
            />
            <img
              src="/images/logo/logo-dark.svg"
              alt="Logo"
              className="hidden h-8 dark:block"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-6">
            <a
              href="/#features"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600"
            >
              Features
            </a>
            <a
              href="https://admin.elitesportfinance.com/forecast"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600"
            >
              Forecast
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://admin.elitesportfinance.com/Signin"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600"
            >
              Sign In
            </a>
            <a
              href="https://admin.elitesportfinance.com/contact-us"
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              Request Access
            </a>
          </div>

          {/* Mobile Menu Button - Isolated version with explicit button type */}
          <button
            type="button" 
            onClick={toggleMenu}
            className="relative z-50 p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 lg:hidden isolate"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slides from top */}
      <div 
        className={`fixed inset-x-0 z-40 bg-white dark:bg-gray-900 shadow-lg transform transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        style={{ top: '64px' }} // Adjust based on header height
      >
        <div className="px-4 py-6">
          {/* Mobile Navigation Links */}
          <nav className="grid gap-y-6 mb-6">
            <a
              href="/#features"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium dark:text-gray-300 dark:hover:text-blue-600"
              onClick={closeMenu} // Only close menu, allow default navigation
            >
              Features
            </a>
            <a
              href="https://admin.elitesportfinance.com/forecast"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium dark:text-gray-300 dark:hover:text-blue-600"
              onClick={closeMenu} // Only close menu, allow default navigation
            >
              Forecast
            </a>
          </nav>

          {/* Mobile Actions */}
          <div className="flex flex-col space-y-4">
            <a
              href="https://admin.elitesportfinance.com/Signin"
              className="block w-full text-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600 py-2"
              onClick={closeMenu} // Only close menu, allow default navigation
            >
              Sign In
            </a>
            <a
              href="https://admin.elitesportfinance.com/contact-us"
              className="block w-full text-center px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              onClick={closeMenu} // Only close menu, allow default navigation
            >
              Request Access
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop overlay - only shows when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-30 lg:hidden" 
          style={{ top: '64px' }}
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}