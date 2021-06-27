import styled from 'styled-components';

export const SBoxContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #f7f7fd;
  position: relative;
  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;
export const SBoxContent = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-evenly;
  top: 30px;
  @media screen and (max-width: 768px) {
    top: 10px;
  }
`;
export const BoxItemContainer = styled.div``;
export const BoxItem = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    margin: 16px;
  }
`;

export const BoxPng = styled.img`
  margin-right: 10px;
`;
export const BoxH1 = styled.div`
  font-size: 26px;
  font-weight: 600;
`;
export const BoxSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
export const BoxSub = styled.div`
  font-size: 12px;
  font-weight: 200;
`;

export const BoxTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
