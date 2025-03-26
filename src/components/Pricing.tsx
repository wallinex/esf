import React from 'react';

const Pricing = () => {
  // Revenue sharing data for visualization
  const revenueSharingData = {
    traditional: [
      { name: 'Club', value: 70 },
      { name: 'Service Provider', value: 30 }
    ],
    partnership: [
      { name: 'Club', value: 85 },
      { name: 'Elite Sports Finance', value: 15 }
    ]
  };

  // Revenue growth projection data
  const growthData = {
    labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
    current: [100, 105, 110, 115, 120],
    withPartnership: [100, 130, 175, 230, 300]
  };

  // Benefits of the partnership model
  const benefits = [
    {
      title: "Aligned Incentives",
      description: "We only succeed when you do. Our revenue is directly tied to the additional income we generate for your club.",
      icon: "🤝"
    },
    {
      title: "Zero Upfront Costs",
      description: "No implementation fees, monthly charges, or hidden costs. We invest in our partnership from day one.",
      icon: "💰"
    },
    {
      title: "Transparent Revenue Sharing",
      description: "Clear, simple revenue sharing model with real-time reporting on all financial transactions.",
      icon: "📊"
    },
    {
      title: "Exclusive Elite Network",
      description: "Join an exclusive network of top-tier clubs committed to financial innovation and fan engagement.",
      icon: "🌟"
    }
  ];

  return (
    <div id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Partnership Model</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            True Partnerships, Not Pricing Tiers
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We exclusively partner with elite sports clubs in a revenue-sharing model. 
            No fees, just shared success in generating new revenue streams.
          </p>
        </div>

        {/* Revenue Sharing Model Visualization Section */}
        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How Our Revenue Sharing Works</h3>
            <p className="text-lg text-gray-500 mb-8">
              Unlike traditional service providers who charge fixed fees regardless of results, 
              we only earn when we deliver value. We take a small percentage of the 
              <span className="font-bold text-blue-600"> new revenue streams</span> we create, 
              ensuring our incentives are perfectly aligned with yours.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-4">Key Revenue Streams We Generate:</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Credit card transaction fees</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Affiliate marketing partnerships</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Loyalty program monetization</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Enhanced merchandise and ticket sales</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Revenue Share Comparison Chart */}
          <div className="mt-10 lg:mt-0 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-6 text-center">Revenue Distribution Comparison</h3>
            <div className="flex justify-around mb-8">
              {/* Traditional Model Donut Chart */}
              <div className="text-center">
                <div className="relative inline-block w-32 h-32">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <circle cx="18" cy="18" r="16" fill="#e0e0e0" />
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#2563EB" strokeWidth="32" strokeDasharray="70 30" strokeDashoffset="25" />
                    <text x="18" y="18" textAnchor="middle" dy=".3em" className="text-xs fill-current">70%</text>
                  </svg>
                </div>
                <p className="mt-2 font-medium">Traditional Model</p>
                <p className="text-xs text-gray-500">30% to service provider</p>
              </div>

              {/* Partnership Model Donut Chart */}
              <div className="text-center">
                <div className="relative inline-block w-32 h-32">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <circle cx="18" cy="18" r="16" fill="#e0e0e0" />
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#2563EB" strokeWidth="32" strokeDasharray="85 15" strokeDashoffset="25" />
                    <text x="18" y="18" textAnchor="middle" dy=".3em" className="text-xs fill-current">85%</text>
                  </svg>
                </div>
                <p className="mt-2 font-medium">Our Partnership Model</p>
                <p className="text-xs text-gray-500">15% to Elite Sports Finance</p>
              </div>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-600 mr-2"></span>
                  <span className="text-sm">Club Revenue</span>
                </div>
                <div className="flex items-center mt-1">
                  <span className="w-3 h-3 rounded-full bg-gray-200 mr-2"></span>
                  <span className="text-sm">Provider Revenue</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic">*Based on new revenue streams generated</p>
            </div>
          </div>
        </div>

        {/* Growth Projection Chart */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Projected Revenue Growth</h3>
          <div className="h-64 relative mb-6">
            {/* SVG Chart */}
            <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="50" y1="250" x2="550" y2="250" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="50" y1="200" x2="550" y2="200" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="50" y1="150" x2="550" y2="150" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="50" y1="100" x2="550" y2="100" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="50" y1="50" x2="550" y2="50" stroke="#e5e7eb" strokeWidth="1" />
              
              {/* Current Revenue Path */}
              <path 
                d="M50,250 L170,237.5 L290,225 L410,212.5 L530,200" 
                fill="none" 
                stroke="#9CA3AF" 
                strokeWidth="3" 
              />
              
              {/* With Partnership Revenue Path */}
              <path 
                d="M50,250 L170,200 L290,150 L410,100 L530,50" 
                fill="none" 
                stroke="#2563EB" 
                strokeWidth="3" 
              />
              
              {/* X-Axis Labels */}
              <text x="50" y="270" textAnchor="middle" className="text-xs fill-current">Year 1</text>
              <text x="170" y="270" textAnchor="middle" className="text-xs fill-current">Year 2</text>
              <text x="290" y="270" textAnchor="middle" className="text-xs fill-current">Year 3</text>
              <text x="410" y="270" textAnchor="middle" className="text-xs fill-current">Year 4</text>
              <text x="530" y="270" textAnchor="middle" className="text-xs fill-current">Year 5</text>
              
              {/* Points on lines */}
              <circle cx="50" cy="250" r="4" fill="#9CA3AF" />
              <circle cx="170" cy="237.5" r="4" fill="#9CA3AF" />
              <circle cx="290" cy="225" r="4" fill="#9CA3AF" />
              <circle cx="410" cy="212.5" r="4" fill="#9CA3AF" />
              <circle cx="530" cy="200" r="4" fill="#9CA3AF" />
              
              <circle cx="50" cy="250" r="4" fill="#2563EB" />
              <circle cx="170" cy="200" r="4" fill="#2563EB" />
              <circle cx="290" cy="150" r="4" fill="#2563EB" />
              <circle cx="410" cy="100" r="4" fill="#2563EB" />
              <circle cx="530" cy="50" r="4" fill="#2563EB" />
            </svg>
            
            {/* Y-Axis Labels */}
            <div className="absolute text-xs text-gray-500 -left-1 top-0 transform -translate-x-full">300%</div>
            <div className="absolute text-xs text-gray-500 -left-1 top-1/4 transform -translate-x-full">225%</div>
            <div className="absolute text-xs text-gray-500 -left-1 top-2/4 transform -translate-x-full">150%</div>
            <div className="absolute text-xs text-gray-500 -left-1 top-3/4 transform -translate-x-full">75%</div>
            <div className="absolute text-xs text-gray-500 -left-1 bottom-0 transform -translate-x-full">0%</div>
          </div>
          
          {/* Legend */}
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center">
              <span className="w-4 h-1 bg-blue-600 rounded mr-2"></span>
              <span className="text-sm">With Elite Sports Finance</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-1 bg-gray-400 rounded mr-2"></span>
              <span className="text-sm">Current Trajectory</span>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Our Partnership Model Works</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900">Ready to Transform Your Club's Finances?</h3>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We partner exclusively with elite clubs committed to innovation. Schedule a consultation 
            to discuss your specific revenue potential.
          </p>
          <div className="mt-8">
            <a
              href="mailto:partners@elitesportsfinance.com?subject=Partnership%20Interest&body=Hi%2C%0A%0AWe%20are%20interested%20in%20discussing%20a%20potential%20partnership.%0A%0AOur%20club%20information%3A%0A-%20Club%20Name%3A%0A-%20Approximate%20fan%20base%20size%3A%0A-%20Current%20financial%20offerings%3A%0A-%20Primary%20contact%3A%0A%0AWe%20look%20forward%20to%20hearing%20from%20you.%0A%0ARegards%2C"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Schedule a Consultation
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            For top-tier clubs and organizations only. All partnerships undergo qualification review.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;