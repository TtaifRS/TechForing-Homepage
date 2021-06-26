import React from 'react';
import {
  LogoContainer,
  LogoTextContainer,
  LogoSpan,
  LogoH3,
  LogoPngContainer,
  LogoPngDiv,
  LogoImg,
} from './TrustedSectionStyle';
import { Logos } from './logoImport';

const TrustedSection = () => {
  return (
    <LogoContainer>
      <LogoTextContainer>
        <LogoH3 className="">TRUSTED BY IT & TELECOM COMPANIES LIKE</LogoH3>
        <LogoSpan></LogoSpan>
      </LogoTextContainer>
      <LogoPngContainer className="">
        {Logos.map((logo, index) => {
          const { src, alt } = logo;
          return (
            <LogoPngDiv>
              <LogoImg key={index} src={src} alt={alt} />
            </LogoPngDiv>
          );
        })}
      </LogoPngContainer>
    </LogoContainer>
  );
};

export default TrustedSection;
