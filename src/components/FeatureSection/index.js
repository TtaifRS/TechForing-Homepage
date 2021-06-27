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
  FTestimonialSection,
  FTestimonialContainer,
  LeftContainer,
  RightContainer,
} from './FeatureSectionStyle';

import FeaturesImg from '../../assets/infoImages/Features.png';

import FeatureBox from '../FeatureBoxComponent';

import Testimonials from '../Testimonials/';

import customer1 from '../../assets/infoImages/cus-1.png';
import customer2 from '../../assets/infoImages/cus-2.png';

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
      <FTestimonialContainer>
        <TextH3 text="WHAT OUR CUSTOMERS SAY" />
        <FTestimonialSection>
          <LeftContainer>
            <Testimonials
              src={customer1}
              name="Monica, CTO"
              title="Ometria"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy 
              text ever since the 1500s,"
            />
          </LeftContainer>
          <RightContainer>
            <Testimonials
              src={customer2}
              name="Al James, CTO"
              title="Ometria"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy 
              text ever since the 1500s,"
            />
          </RightContainer>
        </FTestimonialSection>
      </FTestimonialContainer>
    </FeatureContainer>
  );
};

export default FeaturerSection;
