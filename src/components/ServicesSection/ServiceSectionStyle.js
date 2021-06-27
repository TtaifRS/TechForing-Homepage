import styled from 'styled-components';

export const ServiceContainer = styled.div`
  overflow: hidden;
  margin-top: -5px;
  position: relative;
  z-index: 1;
  margin-bottom: 64px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ServiceTitleContainer = styled.div`
  margin-bottom: 80px;
`;
export const ServiceP = styled.p`
  font-family: 'PT sans';
  width: 80%;
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.5;
  }
`;
export const ServiceInfoContainer = styled.div`
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
export const ServiceLeftContainer = styled.div`
  height: 400px;
  position: relative;
  margin: auto 0;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
export const ServiceH3 = styled.h3`
  font-weight: 900;
  font-size: 22px;
  margin-bottom: 40px;
`;
export const ServiceH4 = styled.p`
  font-family: 'Pt Sans';
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 600;
`;
export const ServiceUl = styled.ul`
  list-style: 'none';
  @media screen and (max-width: 768px) {
    list-style: none;
  }
`;
export const ServiceLi = styled.li`
  margin-bottom: 20px;
  font-size: 17px;
  font-family: 'Pt Sans';
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 17px;
  }
`;
export const ServiceRightContainer = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
export const ServiceImg = styled.img`
  float: right;
  -webkit-box-shadow: 3px 3px 4px 0px #000000;
  box-shadow: 3px 3px 4px 0px #000000;
  @media screen and (max-width: 768px) {
    width: 350px;
    float: none;
    margin-left: 0 auto;
  }
`;
export const ServiceBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServiceDetailes = styled.div`
  margin: 24px;
`;

export const DetailesContainer = styled.div`
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
export const DetailesLeft = styled.div`
  flex: 1;
  position: relative;
  margin: 20px;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
export const DetailesRight = styled.div`
  flex: 1;
  margin: 20px;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
