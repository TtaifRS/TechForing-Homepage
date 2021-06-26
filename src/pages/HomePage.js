import React from 'react';

import Navbar from '../components/NavBar';
import HeroBox from '../components/HeroBox';
import TrustedSection from '../components/TrustedSection';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroBox />
      <TrustedSection />
    </div>
  );
};

export default HomePage;
