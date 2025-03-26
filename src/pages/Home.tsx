// pages/Home.tsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Product from '../components/Product';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="dark bg-white">
      <MainLayout>
        <Hero />
        <Features />
        <Product /> 
        <HowItWorks />
        {/* <Testimonials /> */}
     
        <CTA />
      </MainLayout>
    </div>
  );
};

export default Home;