import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FeatureBoxContainer = styled.div`
  border: 2px solid #182f59;
  position: relative;
  width: 250px;

  border-radius: 10px;
  background: #f3f7fc;

  flex: 0 0 calc(50% - 20px);

  padding: 20px;
  margin: 10px;

  -webkit-box-shadow: 3px 4px 4px -4px #000000;
  box-shadow: 3px 4px 4px -4px #000000;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    flex: 1;
    margin: 20px;
  }
`;

export const FeatureBoxIcon = styled.img`
  margin: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
export const FeatureBoxText = styled.p`
  text-align: center;
  margin: 10px;
`;

export const FeatureBoxIconContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const FeatureBoxTextContainer = styled.div``;
