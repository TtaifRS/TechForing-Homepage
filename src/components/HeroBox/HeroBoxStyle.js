import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    height: 800px;
    overflow: hidden;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80%;
  margin: 0 auto;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 80%;
  }
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  -o-object-fit: object;
  background: #232a34;
  @media screen and (max-width: 768px) {
    object-fit: fill;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 25%;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: center;
  font-weight: 900;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  max-width: 600px;
  font-family: 'PT Sans';
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const HeroInput = styled.div`
  width: 50%;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;
