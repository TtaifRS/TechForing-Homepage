import styled from 'styled-components';

export const FeatureContainer = styled.div`
  overflow: hidden;
  margin-top: -5px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const FeatureTitleContainer = styled.div`
  margin-bottom: 80px;
`;
export const FeatureP = styled.p`
  font-family: 'PT sans';
  font-weight: 600;
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 40px;
    font-size: 14px;
    line-height: 1.5;
  }
`;
export const FeatureInfoContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 80%;
  position: relative;
  justify-content: space-between;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: grid;
    width: 100%;
    padding: 0 5px;
  }
`;
export const FeatureLeftContainer = styled.div`
  height: 400px;
  position: relative;
  margin: auto 0;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
export const FeatureH3 = styled.h3`
  font-weight: 900;
  font-size: 22px;
  margin-bottom: 40px;
`;
export const FeatureH4 = styled.p`
  font-family: 'Pt Sans';
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 600;
`;
export const FeaturesBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 768px) {
    list-style: none;
  }
`;
export const FeatureLi = styled.li`
  margin-bottom: 20px;
  font-size: 17px;
  font-family: 'Pt Sans';
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 17px;
  }
`;
export const FeatureRightContainer = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
export const FeatureImg = styled.img`
  width: 80%;
  float: left;
  -webkit-box-shadow: 3px 3px 4px 0px #000000;
  box-shadow: 3px 3px 4px 0px #000000;
  @media screen and (max-width: 768px) {
    width: 350px;
    float: none;
    margin-left: 0 auto;
  }
`;
export const FeatureBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
