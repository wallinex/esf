// components/CTA.tsx
import React from 'react';

const CTA = () => {
    return (
      <div className="bg-gray-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your club's finances?</span>
            <span className="block text-blue-200">Get started with Elite Sport Finance today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow w-full sm:w-auto justify-center">
              <a
              href="https://admin.elitesportfinance.com/contact-us" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white hover:bg-blue-50"
              >
              Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CTA;