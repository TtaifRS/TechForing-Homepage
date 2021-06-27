import styled from 'styled-components';

export const AdContainer = styled.div`
  width: 100%;
  height: 300px;
  background: #182f59;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    height: 600px;
    margin-bottom: 32px;
  }
`;
export const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    display: grid;
    grid-gap: 20px;
  }
`;
export const AdImage = styled.img`
  height: 80%;
  margin: 30px;
  @media screen and (max-width: 480px) {
    height: 250px;
    margin: 30px auto;
  }
`;
export const TextContainer = styled.div`
  flex: 1;
`;

export const AdTextContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 20px;
  padding: 0 8px;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
export const AdTextSpan = styled.span`
  display: block;
  width: 103px;
  border-top: 5px solid #fff;
  position: relative;
  margin: 0 auto;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 103px;
  }
`;
export const AdTextTitle = styled.h3`
  font-size: 30px;
  font-family: '';
  display: flex;
  color: #fff;
  font-family: 'PT Sans';
  font-weight: 400;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    justify-content: center;
  }
`;

export const BtnWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
    margin: 20px auto;
  }
`;
