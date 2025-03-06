// components/Header.tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center text-2xl font-bold text-blue-600">
              <img src="/logo192.png" alt="Elite Sports Finance Logo" className="h-8 w-8 mr-2" />
              Elite Sports Finance
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Features
            </a>
            <a href="#how-it-works" className="text-base font-medium text-gray-500 hover:text-gray-900">
              How It Works
            </a>
            {/* <a href="#testimonials" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Testimonials
            </a>
            <a href="#pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </a> */}
          </nav>

          {/* CTA button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="mailto:partners@elitesportsfinance.com?subject=Partner%20Interest&body=Hi%2C%0A%0AWe%20are%20interested%20in%20partnering%20to%20improve%20our%20fan%20experience%20and%20increase%20our%20revenues.%0A%0AWe%20are%20a%20club%20with%20these%20many%20fans%3A%0A%0AWe%20are%20located%20in%3A%0A%0AWe%20would%20like%20to%20get%20started%3A%0A%0AThank%20you%21"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-blue-600">Elite Sports Finance</span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#features" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Features
                  </a>
                  <a href="#how-it-works" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    How It Works
                  </a>
                  <a href="#testimonials" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Testimonials
                  </a>
                  <a href="#pricing" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Pricing
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="mailto:partners@elitesportsfinance.com?subject=Partner%20Interest&body=Hi%2C%0A%0AWe%20are%20interested%20in%20partnering%20to%20improve%20our%20fan%20experience%20and%20increase%20our%20revenues.%0A%0AWe%20are%20a%20club%20with%20these%20many%20fans%3A%0A%0AWe%20are%20located%20in%3A%0A%0AWe%20would%20like%20to%20get%20started%3A%0A%0AThank%20you%21"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;