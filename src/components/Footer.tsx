// components/Footer.tsx
import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-black text-gray-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              {/* Logo */}
          <div className="flex justify-start">
            <a
              href="#"
              className="flex items-center font-logo text-2xl text-white hover:text-gray-200"
           
            >
              <img src="/esf-icon-white.png" alt="Elite Sports Finance Logo" className="h-8 w-8 mr-2" />
              Elite Sports Finance
            </a>
          </div>
              <p className="text-gray-400 text-base">
                Turning Fan Passion into Financial Power
              </p>
              <div className="flex space-x-6">
                {/* Social media links would go here */}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="/#how-it-works" className="text-base text-gray-300 hover:text-white">
                        White-Label Credit Cards
                      </a>
                    </li>
                    <li>
                      <a href="/#how-it-works" className="text-base text-gray-300 hover:text-white">
                        Loyalty Programs
                      </a>
                    </li>
                    <li>
                      <a href="/#how-it-works" className="text-base text-gray-300 hover:text-white">
                        Affiliate Revenue
                      </a>
                    </li>
                    <li>
                      <a href="/#how-it-works" className="text-base text-gray-300 hover:text-white">
                        Data Analytics
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                  <ul className="mt-4 space-y-4">
                    {/* <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Documentation
                      </a>
                    </li> */}
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    {/* <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Blog
                      </a>
                    </li> */}
                    <li>
                        <a href="mailto:careers@elitesportsfinance.com" className="text-base text-gray-300 hover:text-white">
                            Careers
                        </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Terms
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2025 Elite Sports Finance AB. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 xl:text-center mt-4">
              Elite Sports Finance AB is a technology provider. All banking services are provided by our banking partners.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;