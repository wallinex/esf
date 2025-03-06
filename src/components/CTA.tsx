// components/CTA.tsx
import React from 'react';

const CTA = () => {
    return (
      <div className="bg-gray-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your club's finances?</span>
            <span className="block text-blue-200">Get started with Elite Sports Finance today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="mailto:partners@elitesportsfinance.com?subject=Partner%20Interest&body=Hi%2C%0A%0AWe%20are%20interested%20in%20partnering%20to%20improve%20our%20fan%20experience%20and%20increase%20our%20revenues.%0A%0AWe%20are%20a%20club%20with%20these%20many%20fans%3A%0A%0AWe%20are%20located%20in%3A%0A%0AWe%20would%20like%20to%20get%20started%3A%0A%0AThank%20you%21"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white hover:bg-blue-50"
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