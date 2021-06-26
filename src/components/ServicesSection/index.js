import React, { useState } from 'react';
import TextH3 from '../TextH3';
import { Button } from '../ButtonStyle';

import {
  ServiceContainer,
  ServiceTitleContainer,
  ServiceP,
  ServiceInfoContainer,
  ServiceLeftContainer,
  ServiceH3,
  ServiceH4,
  ServiceUl,
  ServiceLi,
  ServiceRightContainer,
  ServiceImg,
  ServiceBtnWrapper,
} from './ServiceSectionStyle';

import servicesImg from '../../assets/infoImages/services.png';

const ServicesSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <ServiceContainer id="services">
      <ServiceTitleContainer>
        <TextH3 text="WANT A FULL SCAN?" />
        <ServiceP>
          Website Vulnerability Free scan performs a passive web security scan
          in order to detect issues like: outdated server software, insecure
          HTTP headers, insecure cookie settings and a few others. We recommend
          doing a Full Scan for a comprehensive website assessment which
          includes detection of SQL Injection, XSS, Local File Inclusion, OS
          Command Injection and more.
        </ServiceP>
        <ServiceBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={false}
            dark={false}
          >
            Free Scan
          </Button>
        </ServiceBtnWrapper>
      </ServiceTitleContainer>
      <ServiceInfoContainer>
        <ServiceLeftContainer>
          <ServiceH3>Sample Report</ServiceH3>
          <ServiceH4>
            Here is a Website Vulnerability Scanner sample report:
          </ServiceH4>
          <ServiceUl>
            <ServiceLi>
              The report starts with a quick summary of the findings and risk
              ratings
            </ServiceLi>
            <ServiceLi>
              Each finding has a detailed explanation in terms of risk and
              recommendations
            </ServiceLi>
            <ServiceLi>
              The vulnerabilities are ordered by the risk level
            </ServiceLi>
          </ServiceUl>
        </ServiceLeftContainer>
        <ServiceRightContainer>
          <ServiceImg src={servicesImg} alt="services" />
        </ServiceRightContainer>
      </ServiceInfoContainer>
    </ServiceContainer>
  );
};

export default ServicesSection;
