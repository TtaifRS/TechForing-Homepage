import React from 'react';
import TextH3 from '../TextH3';

import {
  FeatureContainer,
  FeatureP,
  FeatureTitleContainer,
  FeatureInfoContainer,
  FeatureLeftContainer,
  FeaturesBoxContainer,
  FeatureRightContainer,
  FeatureImg,
} from './FeatureSectionStyle';

import FeaturesImg from '../../assets/infoImages/Features.png';

import FeatureBox from '../FeatureBoxComponent';

const FeaturerSection = () => {
  return (
    <FeatureContainer id="features">
      <FeatureTitleContainer>
        <TextH3 text="Features of  Thirdeye" />
      </FeatureTitleContainer>
      <FeatureInfoContainer>
        <FeatureLeftContainer>
          <FeatureImg src={FeaturesImg} alt="Features" />
        </FeatureLeftContainer>
        <FeatureRightContainer>
          <FeatureP>Facilities you will get using this scanner </FeatureP>
          <FeaturesBoxContainer>
            <FeatureBox />
          </FeaturesBoxContainer>
        </FeatureRightContainer>
      </FeatureInfoContainer>
    </FeatureContainer>
  );
};

export default FeaturerSection;
