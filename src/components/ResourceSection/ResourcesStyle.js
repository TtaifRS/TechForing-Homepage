import styled from 'styled-components';

export const ResourcesContainer = styled.div``;

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  margin: 0 40px;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-gap: 20px;
  }
`;
