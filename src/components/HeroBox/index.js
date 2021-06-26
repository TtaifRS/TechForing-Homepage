import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroInput,
} from './HeroBoxStyle';

import { Button } from '../ButtonStyle';
import HeroForm from '../HeroForm';
import heroImg from '../../assets/herobg/header.jpg';
const HeroBox = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={heroImg} />
      </HeroBg>
      <HeroContent>
        <HeroH1>TECHFORING VULNERABILITY SCANNER</HeroH1>
        <HeroP>
          THIRDEYE is an online vulnerability scanner that finds cyber security
          weaknesses in your digital infrastructure before the hackers do.
          Discover common web application vulnerabilities and server
          configuration issues.
        </HeroP>
        <HeroInput>
          <HeroForm />
        </HeroInput>

        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Free Scan {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroBox;
