import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.7);
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  z-index: 1;
`;

export const NavLogoContainer = styled(motion.div)`
  cursor: pointer;
  display: flex;
  justify-self: flex-start;
  align-items: center;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #5bbc2e;
  }
`;

export const NavLogo = styled.img`
  width: 108px;
  height: 48px;
  margin-left: 24px;
  @media screen and (max-width: 960px) {
    width: 90px;
    height: 40px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItems = styled.li`
  height: 80px;
`;

export const NavMotion = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
`;
export const NavLinks = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'PT Sans';

  &.active {
    border-bottom: 3px solid #5bbc2e;
  }
`;

export const NavBtn = styled(motion.nav)`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.div`
  border-radius: 50px;
  background: #5bbc2e;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: 0 10px;
  font-family: 'PT Sans';
  &:hover {
    transition: all 0.5s ease-in-out;
    background: #182f59;
    color: #fff;
  }
`;
