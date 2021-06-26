import React from 'react';
import { Container } from 'react-bootstrap';

import Navbar from '../components/NavBar';
import HeroBox from '../components/HeroBox';

const HomePage = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <HeroBox />
      </Container>
    </div>
  );
};

export default HomePage;
