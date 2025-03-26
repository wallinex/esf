import React, { useEffect, useRef, useState } from 'react';

const Product = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // App features that highlight the mobile capabilities
  const appFeatures = [
    {
      title: "Fan Loyalty Dashboard",
      description: "Fans can track their points, rewards, and exclusive offers all in one place.",
      icon: "🏆"
    },
    {
      title: "Seamless Tracking",
      description: "Integrated payment tracking for seamless discounts and profit sharing.",
      icon: "💳"
    },
    {
      title: "Deals & Discounts",
      description: "Offer exclusive deals and discounts to fans from club partners.",
      icon: "💸"
    },
    {
      title: "Subscription Revenue",
      description: "Create subscription-based revenue streams with elite status cards.",
      icon: "🎟️"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="product" ref={sectionRef} className="md:py-16 bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section - stays at the top */}
        <div className="lg:text-center mb-8">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Mobile App</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Engage Your Fans Everywhere
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our white-label mobile app connects your club directly to fans, creating new revenue streams and deeper engagement.
          </p>
        </div>

        {/* iPhone that appears in the middle - visible on all screens */}
        <div 
          className={`transition-all duration-1000 transform my-8 lg:hidden ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-8'
          }`}
          style={{ 
            transitionDelay: '0.3s',
            height: isVisible ? 'auto' : '0px',
            overflow: 'hidden'
          }}
        >
          <div className="flex justify-center">
            <img 
              src="/aik-iPhone-left.png" 
              alt="Fan loyalty rewards screen" 
              className="w-auto h-[400px] object-contain rounded-3xl filter drop-shadow-lg" 
            />
          </div>
        </div>

        {/* Main content - slides down to make room for the iPhone */}
        <div 
          className={`transition-all duration-1000 ease-out lg:grid lg:grid-cols-5 lg:items-center ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-16'
          }`}
          style={{
            transitionDelay: '0.6s' // Delay this so it comes after the iPhone appears
          }}
        >
          {/* Left side - App features content */}
          <div className="lg:col-span-2 relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Powerful Features for Clubs and Fans
            </h3>
            <p className="text-lg text-gray-500 mb-8">
              Our mobile platform transforms how fans interact with your club, driving higher engagement and increasing revenue through personalized experiences and exclusive offers.
            </p>
            
            {/* App features grid */}
            <div className="space-y-8">
              {appFeatures.map((feature) => (
                <div key={feature.title} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white border border-gray-200 shadow-sm">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">{feature.title}</h4>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="mt-10 text-center lg:text-left">
              <a
              href="https://admin.elitesportfinance.com/contact-us"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
              Request a Demo
              </a>
            </div>
          </div>

          {/* Right side - Phone images with animation (only on larger screens) */}
          <div 
            className="lg:col-span-3 relative mt-16 lg:mt-0 hidden lg:block" 
            style={{ height: "500px", minHeight: "300px" }}
          >
            {/* Container to ensure consistent phone heights with more space */}
            <div className="relative h-full flex items-center justify-center overflow-visible">
              {/* Phone right - background phone */}
              <div 
                className={`absolute transition-all duration-1000 transform ${
                  isVisible 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-32 opacity-0'
                }`}
                style={{ 
                  right: '12%', 
                  zIndex: 10,
                  transitionDelay: '0.7s'
                }}
              >
                <img 
                  src="/aik-iPhone-right.png" 
                  alt="Club mobile app dashboard" 
                  className="w-auto h-[600px] object-contain rounded-3xl filter drop-shadow-lg" 
                />
              </div>

              {/* Phone left - foreground phone */}
              <div 
                className={`absolute transition-all duration-1000 transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : '-translate-y-8 opacity-0'
                }`}
                style={{ 
                  left: '12%',
                  zIndex: 20,
                  transitionDelay: '0.9s'
                }}
              >
                <img 
                  src="/aik-iPhone-left.png" 
                  alt="Fan loyalty rewards screen" 
                  className="w-auto h-[600px] object-contain rounded-3xl filter drop-shadow-lg mx-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;