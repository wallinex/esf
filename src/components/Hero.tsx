// components/Hero.tsx
import React from 'react';
import AnimatedColumns from './common/AnimatedColumns';
import Tooltip from './common/ToolTip';

const Hero = () => {
    return (
      <div className="relative bg-white overflow-hidden pt-16">
      
        <div className=" md:h-40"></div>
       
        <div className="hidden bg-black w-8 lg:h-8"></div>
        <div className="absolute inset-0 bg-fixed lg:bg-cover bg-center bg-top" style={{ backgroundImage: 'url("/test.png")', paddingTop: '40px' }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-black opacity-75"></div>
        </div>
       {/* Animated card */}
       <div className='absolute right-0 top-1/2 transform -translate-y-1/2 animate-slideInRight md:animate-slideUp'
       style={{
           right: 'calc(15% - 24px)'
       }}>

        {/* Tooltip for card */}
        <Tooltip text="White-label cards" position={{ top: -20, right:-50 }} delay={700} className="scale-in"  />
       
        <div
          className="rounded-lg border-2 border-gradient-blue shadow-lg"
          style={{
            backgroundImage: 'url("/card-data.png")',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            width: '320px',
            height: '200px',
            padding: '20px',
            backgroundPosition: '20px 60px',
           
          }}
        />
        </div>
        {/* Animated columns */}
        <div
          className="absolute right-0 top-3/4 transform -translate-y-1/2 animate-slideInRight"
          style={{
            right: 'calc(15% - 24px)' // Adjust this value to align with the SVG
          }}
        >
          <AnimatedColumns />
          <Tooltip text="Real Time Analytics" position={{ top: 40, left: -50 }} delay={900} className="scale-in"  />
          <Tooltip text="Improved ROI" position={{ bottom: 40, right: -50 }} delay={1300} className="scale-in"  />
        </div>
        <div className="relative max-w-7xl mx-auto">
        <div className="block md:hidden w-full h-8">
        <div className='p-4'>
       

        {/* Tooltip for card */}
        
        <div
          className="rounded-lg border-2 border-gradient-blue shadow-lg animate-slideUp"
          style={{
            backgroundImage: 'url("/card-data.png")',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            width: '320px',
            height: '200px',
            padding: '20px',
            backgroundPosition: '20px 60px',
            
           
          }}
        />
        <Tooltip text="White-label cards" position={{ top: -10, right: 8 }} delay={800} className="scale-in"  small/>
        <Tooltip text="Real Time Analytics" position={{ top: 110, right: 8 }} delay={900} className="scale-in" small  />
        </div>
              
              
            </div>
            
    
          <div className="relative z-10 pb-8  bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
  
            <main className=" mt-32 mx-auto max-w-7xl px-4 sm:px-6 md:mt-16 lg:mt-24 lg:px-8 xl:mt-28">
            
              <div className="sm:text-center lg:text-left">
                <div className="hidden lg:block lg:h-8"></div>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="pt-4 block xl:inline">Elite Sports Finance</span>{' '}
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