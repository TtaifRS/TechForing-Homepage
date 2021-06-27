import React from 'react';
import {
  LogoContainer,
  LogoPngContainer,
  LogoPngDiv,
  LogoImg,
} from './TrustedSectionStyle';
import { Logos } from './logoImport';
import TextH3 from '../TextH3';

const TrustedSection = () => {
  return (
    <LogoContainer>
      <TextH3 text="TRUSTED BY IT & TELECOM COMPANIES LIKE" />
      <LogoPngContainer className="">
        {Logos.map((logo, index) => {
          const { src, alt } = logo;
          return (
            <LogoPngDiv key={index}>
              <LogoImg src={src} alt={alt} />
            </LogoPngDiv>
          );
        })}
      </LogoPngContainer>
    </LogoContainer>
  );
};

export default TrustedSection;
