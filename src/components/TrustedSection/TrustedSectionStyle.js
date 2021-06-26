import styled from 'styled-components';

export const LogoContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    overflow: hidden;
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
