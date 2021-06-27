import React from 'react';

import Navbar from '../components/NavBar';
import HeroBox from '../components/HeroBox';
import TrustedSection from '../components/TrustedSection';
import ServicesSection from '../components/ServicesSection';
import FeaturerSection from '../components/FeatureSection';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroBox />
      <TrustedSection />
      <ServicesSection />
      <FeaturerSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default HomePage;
