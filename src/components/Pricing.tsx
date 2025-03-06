// components/Pricing.tsx
import React from 'react';
const Pricing = () => {
    const plans = [
      {
        name: "Standard",
        price: "Contact for pricing",
        description: "Perfect for medium-sized clubs looking to enhance fan revenue streams",
        features: [
          "White-label credit card program",
          "Basic loyalty program",
          "Standard affiliate partnerships",
          "Quarterly performance reports",
          "Email support"
        ],
        cta: "Get Started",
        highlighted: false
      },
      {
        name: "Premium",
        price: "Contact for pricing",
        description: "Our most popular plan for large clubs with active fan bases",
        features: [
          "Everything in Standard",
          "Advanced loyalty program features",
          "Priority affiliate partnership matching",
          "Monthly performance analytics",
          "Dedicated account manager",
          "Phone and email support"
        ],
        cta: "Get Started",
        highlighted: true
      },
      {
        name: "Elite",
        price: "Contact for pricing",
        description: "For top-tier clubs seeking maximum financial optimization",
        features: [
          "Everything in Premium",
          "Custom credit card and loyalty features",
          "Premium partner network access",
          "Weekly performance analytics",
          "Strategic financial consulting",
          "24/7 priority support"
        ],
        cta: "Get Started",
        highlighted: false
      }
    ];
  
    return (
      <div id="pricing" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Plans Tailored to Elite Clubs
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Choose the right financial solution package for your club's needs and fan base size.
            </p>
          </div>
  
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${plan.highlighted ? 'border-2 border-blue-500 ring-2 ring-blue-500' : 'border border-gray-200'}`}>
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <h3 className="text-xl font-medium text-gray-900">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-2xl font-extrabold tracking-tight">{plan.price}</span>
                  </div>
                  <p className="mt-5 text-lg text-gray-500">{plan.description}</p>
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-md shadow">
                    <a
                      href="mailto:partners@elitesportsfinance.com?subject=Partner%20Interest&body=Hi%2C%0A%0AWe%20are%20interested%20in%20partnering%20to%20improve%20our%20fan%20experience%20and%20increase%20our%20revenues.%0A%0AWe%20are%20a%20club%20with%20these%20many%20fans%3A%0A%0AWe%20are%20located%20in%3A%0A%0AWe%20would%20like%20to%20get%20started%3A%0A%0AThank%20you%21"
                      className={`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${
                        plan.highlighted 
                          ? 'text-white bg-blue-600 hover:bg-blue-700' 
                          : 'text-blue-700 bg-blue-100 hover:bg-blue-200'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Pricing;