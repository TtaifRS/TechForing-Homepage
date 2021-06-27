import React, { useState } from 'react';

import Navbar from '../components/NavBar';
import Sidebar from '../components/SideBar';
import HeroBox from '../components/HeroBox';
import TrustedSection from '../components/TrustedSection';
import ServicesSection from '../components/ServicesSection';
import FeaturerSection from '../components/FeatureSection';
import PricingSection from '../components/PricingSection';
import AdBox from '../components/Adbox';
import ResourcesSection from '../components/ResourceSection';
import Footer from '../components/Footer';
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <div style={{ overflow: 'hidden' }}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroBox />
      <TrustedSection />
      <ServicesSection />
      <FeaturerSection />
      <PricingSection />
      <AdBox />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default HomePage;
