import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01bf71' : '#182f59')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#182f59' : '#01bf71')};
    color: ${({ primary }) => (primary ? '#fff' : '#000')};
  }
`;
