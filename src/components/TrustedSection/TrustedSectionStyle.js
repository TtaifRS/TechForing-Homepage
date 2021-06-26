import styled from 'styled-components';

export const LogoContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    overflow: hidden;
  }
`;

export const LogoTextContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin: 20px;
  padding: 0 8px;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const LogoSpan = styled.span`
  display: block;
  width: 800px;
  border-top: 5px solid #182f59;
  position: relative;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

export const LogoH3 = styled.h3`
  font-size: 30px;
  font-family: '';
  display: flex;
  font-family: 'PT Sans';
  font-weight: 400;
  position: relative;
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    justify-content: center;
  }
`;

export const LogoPngContainer = styled.div`
  display: flex;
  background: #f7f7fd;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
    width: 100vw;
  }
`;

export const LogoPngDiv = styled.div`
  @media screen and (max-width: 768px) {
    margin: 10px;
    padding: 10px;
    position: relative;
  }
`;

export const LogoImg = styled.img`
  width: 100%;
`;
