import React, { useState } from 'react';
import TextH3 from '../TextH3';
import { Button } from '../ButtonStyle';
import ServiceDetailesComponent from '../ServiceDetailesComponent';

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
  ServiceDetailes,
  DetailesContainer,
  DetailesLeft,
  DetailesRight,
} from './ServiceSectionStyle';

import servicesImg from '../../assets/infoImages/services.png';

import service1 from '../../assets/icons/service-1.png';
import service2 from '../../assets/icons/service-2.png';
import service3 from '../../assets/icons/service-3.png';
import service4 from '../../assets/icons/service-4.png';

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
      <ServiceDetailes>
        <TextH3 text="WHAT THIRDEYE LOOKS FOR ON YOUR SITE" />
        <DetailesContainer>
          <DetailesLeft>
            <ServiceDetailesComponent
              title="Self-Security Assessment"
              subText="You can perform a self-security assessment in order to
              detect weaknesses in your own application. This will 
              allow you to fix the vulnerabilities before being hit by 
              real attackers."
              src={service1}
            />
            <ServiceDetailesComponent
              title="Comprehensive Vulnerability Discovery"
              subText="Detect a wide range of network service and web 
              application vulnerabilities across any Internet
              facing system."
              src={service3}
            />
          </DetailesLeft>
          <DetailesRight>
            <ServiceDetailesComponent
              title="Ongoing Vulnerability Management"
              subText="Schedule scans for weekly or monthly reports. 
              Configure report to alert on changes to vulnerability 
              count."
              src={service2}
            />
            <ServiceDetailesComponent
              title="Real Time Risk Visibility"
              subText="Detailed reports that include vulnerability severity 
              with technical details of immediate value to the user."
              src={service4}
            />
          </DetailesRight>
        </DetailesContainer>
      </ServiceDetailes>
    </ServiceContainer>
  );
};

export default ServicesSection;
