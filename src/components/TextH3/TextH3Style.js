import styled from 'styled-components';
export const TextContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin: 20px;
  padding: 0 8px;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const TextSpan = styled.span`
  display: block;
  width: 103px;
  border-top: 5px solid #182f59;
  position: relative;
  margin: 0 auto;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 103px;
  }
`;

export const TextTitle = styled.h3`
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
