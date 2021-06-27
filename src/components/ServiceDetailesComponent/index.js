import React from 'react';

import {
  SDetailseContainer,
  SDetailseImg,
  SDetailesTextContainer,
  SDetailseHeadline,
  SDeteailsSpan,
  SDeatailesH3,
  SDetailsSubText,
  SDeatailseP,
} from './ServiceDetaileStyle';

const ServiceDetailesComponent = ({ title, subText, src }) => {
  return (
    <SDetailseContainer>
      <SDetailseImg src={src} alt="" />
      <SDetailesTextContainer className="">
        <SDetailseHeadline className="">
          <SDeteailsSpan></SDeteailsSpan>
          <SDeatailesH3>{title}</SDeatailesH3>
        </SDetailseHeadline>
        <SDetailsSubText className="">
          <SDeatailseP>{subText}</SDeatailseP>
        </SDetailsSubText>
      </SDetailesTextContainer>
    </SDetailseContainer>
  );
};

export default ServiceDetailesComponent;
