// components/Testimonials.tsx
import React from 'react';

const Testimonials = () => {
    const testimonials = [
      {
        quote: "Since implementing Elite Sports Finance's white-label credit card program, we've seen a 30% increase in revenue and unprecedented levels of fan engagement.",
        author: "Financial Director",
        club: "Premier League Club, UK"
      },
      {
        quote: "The loyalty program has transformed how our fans interact with the club. The additional revenue stream has been significant for our financial stability.",
        author: "CEO",
        club: "La Liga Club, Spain"
      },
      {
        quote: "Working with Elite Sports Finance has been seamless. Their expertise in both sports and financial sectors makes them the perfect partner.",
        author: "Commercial Director",
        club: "Bundesliga Club, Germany"
      }
    ];
  
    return (
      <div id="testimonials" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Elite Clubs Across Europe
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Hear what our partners have to say about their experience with Elite Sports Finance.
            </p>
          </div>
  
          <div className="mt-10">
            <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="lg:col-span-1">
                  <div className="h-full bg-white shadow-lg rounded-lg p-8 flex flex-col">
                    <blockquote className="mt-2">
                      <p className="text-lg text-gray-500">"{testimonial.quote}"</p>
                    </blockquote>
                    <div className="mt-6 flex-grow flex flex-col justify-end">
                      <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                      <div className="text-base text-blue-600">{testimonial.club}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;