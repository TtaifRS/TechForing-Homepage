import React from 'react';

import feature1 from '../../assets/icons/features-1.png';
import feature2 from '../../assets/icons/features-2.png';
import feature3 from '../../assets/icons/features-3.png';
import feature4 from '../../assets/icons/features-4.png';
import feature5 from '../../assets/icons/features-5.png';

import {
  BoxContainer,
  FeatureBoxContainer,
  FeatureBoxIcon,
  FeatureBoxText,
  FeatureBoxIconContainer,
  FeatureBoxTextContainer,
} from './FeatureBoxStyle';

const boxDatas = [
  { src: feature1, title: 'Automate your scan' },
  { src: feature2, title: 'Invite your other organization users' },
  { src: feature3, title: 'Work together with programmer and Developer' },
  { src: feature4, title: 'Generate automated report' },
  { src: feature5, title: 'Find the most common vulnerabilities' },
];
const FeatureBox = () => {
  return (
    <BoxContainer>
      {boxDatas.map((data, index) => {
        const { src, title } = data;
        return (
          <FeatureBoxContainer key={index}>
            <FeatureBoxIconContainer>
              <FeatureBoxIcon src={src} />
            </FeatureBoxIconContainer>
            <FeatureBoxTextContainer>
              <FeatureBoxText>{title}</FeatureBoxText>
            </FeatureBoxTextContainer>
          </FeatureBoxContainer>
        );
      })}
    </BoxContainer>
  );
};

export default FeatureBox;
