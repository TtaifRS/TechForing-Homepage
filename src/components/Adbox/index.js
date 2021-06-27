import React from 'react';

import TextH3 from '../TextH3';
import { Button } from '../ButtonStyle';

import {
  AdContainer,
  AdImage,
  MainContainer,
  TextContainer,
  AdTextContainer,
  AdTextSpan,
  AdTextTitle,
  BtnWrapper,
} from './AdBoxStyle';

import ad from '../../assets/infoImages/ad.png';

const AdBox = () => {
  return (
    <AdContainer>
      <MainContainer>
        <AdImage src={ad} />
        <TextContainer>
          <AdTextContainer>
            <AdTextSpan></AdTextSpan>
            <AdTextTitle>
              Ready to get started with your 30days trail?
            </AdTextTitle>
          </AdTextContainer>
          <BtnWrapper>
            <Button primary>Try For Free</Button>
          </BtnWrapper>
        </TextContainer>
      </MainContainer>
    </AdContainer>
  );
};

export default AdBox;
