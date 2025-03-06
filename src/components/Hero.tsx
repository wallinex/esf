// components/Hero.tsx
import React from 'react';

const Hero = () => {
    return (
      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/test.png"
            alt="Fans at a football match"
          />
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
  
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-24 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <div className="hidden lg:block lg:h-8"></div>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Elite Sports Finance</span>{' '}
                  <span className="block text-blue-600 xl:inline">for Premier Clubs</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  <span className="font-bold">Turning Fan Passion into Financial Power</span>
                </p>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Transforming fan loyalty into financial opportunity through innovative white-label credit cards, loyalty programs, and affiliate revenue solutions for Europe's elite sports clubs.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="mailto:partners@elitesportsfinance.com?subject=Partner%20Interest&body=Hi%2C%0A%0AWe%20are%20interested%20in%20partnering%20to%20improve%20our%20fan%20experience%20and%20increase%20our%20revenues.%0A%0AWe%20are%20a%20club%20with%20these%20many%20fans%3A%0A%0AWe%20are%20located%20in%3A%0A%0AWe%20would%20like%20to%20get%20started%3A%0A%0AThank%20you%21"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#how-it-works"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;