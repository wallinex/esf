// components/HowItWorks.tsx
import React from 'react';

const HowItWorks = () => {
    const steps = [
      {
        number: "01",
        title: "Partner with Elite Sports Finance",
        description: "We'll work closely with your club to understand your unique needs and fan base to develop a tailored financial solution."
      },
      {
        number: "02",
        title: "Implement Custom Solutions",
        description: "Our team handles the technical implementation, from white-label credit card design to loyalty program integration and affiliate partner onboarding."
      },
      {
        number: "03",
        title: "Launch and Promote",
        description: "We collaborate with your marketing team to create compelling campaigns that drive fan adoption of your new financial products."
      },
      {
        number: "04",
        title: "Monitor and Optimize",
        description: "Our analytics platform provides real-time insights, allowing continuous optimization to maximize fan engagement and revenue generation."
      }
    ];
  
    return (
      <div id="how-it-works" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Simple Process for Powerful Results
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              From implementation to revenue generation, we make the process seamless for elite sports clubs.
            </p>
          </div>
  
          <div className="mt-10 lg:flex lg:items-center lg:justify-between">
            <div className="space-y-8 lg:w-1/2">
              {steps.map((step, index) => (
                <div key={step.number} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                      <span className="text-lg font-bold">{step.number}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-8">
              <img src="/card-info.png" alt="Card" className="w-full h-auto shadow-lg rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HowItWorks;