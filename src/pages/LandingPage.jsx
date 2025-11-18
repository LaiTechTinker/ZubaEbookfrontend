import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';
import Features from '../components/layout/Features';
import AboutSection from '../components/layout/About';
import Footer from '../components/layout/Footer';

function LandingPage() {
  return (
    <div className='Main-con'>
      <Navbar/>
      <Hero/>
      <AboutSection/>
     <Features/> 
      <Footer/>
    </div>
  );
}

export default LandingPage;
