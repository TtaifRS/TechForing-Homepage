import React from 'react';

import Navbar from '../components/NavBar';
import HeroBox from '../components/HeroBox';
import TrustedSection from '../components/TrustedSection';
import ServicesSection from '../components/ServicesSection';
import FeaturerSection from '../components/FeatureSection';
import PricingSection from '../components/PricingSection';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroBox />
      <TrustedSection />
      <ServicesSection />
      <FeaturerSection />
      <PricingSection />
    </div>
  );
};

export default HomePage;
