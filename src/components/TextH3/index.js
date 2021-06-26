import React from 'react';
import { TextContainer, TextSpan, TextTitle } from './TextH3Style';
const TextH3 = ({ text }) => {
  return (
    <TextContainer>
      <TextSpan></TextSpan>
      <TextTitle>{text}</TextTitle>
    </TextContainer>
  );
};

export default TextH3;
