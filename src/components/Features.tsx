import React from 'react';

const Features = () => {
    const features = [
      {
        title: "White-Label Credit Cards",
        description: "Branded credit cards that offer fans exclusive rewards while generating revenue for clubs through transaction fees and increased spending.",
        icon: "💳"
      },
      {
        title: "Fan Loyalty Programs",
        description: "Comprehensive loyalty solutions that incentivize fan engagement and create additional revenue streams through partner offers.",
        icon: "🏆"
      },
      {
        title: "Affiliate Revenue Network",
        description: "Connect with premium brands to create lucrative affiliate partnerships that benefit both fans and club finances.",
        icon: "🤝"
      },
      {
        title: "Data-Driven Insights",
        description: "Advanced analytics to better understand fan behavior and optimize financial offerings for maximum revenue.",
        icon: "📊"
      }
    ];
  
    return (
      <div id="features" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Financial Solutions for Elite Clubs
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our comprehensive suite of financial products helps top-tier sports clubs maximize revenue and enhance fan engagement.
            </p>
          </div>
  
          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.title} className="relative">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white shadow-sm border-2 border-gray-100 text-white">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;