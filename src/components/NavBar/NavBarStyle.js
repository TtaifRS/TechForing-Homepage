import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  height: 100px;
  z-index: 10;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  z-index: 1;
`;

export const NavLogoContainer = styled.div`
  cursor: pointer;

  display: flex;
  justify-self: flex-start;
  align-items: center;
`;

export const NavLogo = styled.img`
  width: 162px;
  height: 76px;
  margin-left: 24px;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;
  margin-right: -22px;
`;
export const NavItems = styled.li`
  height: 100px;
`;
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: 'PT Sans';
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
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
`;
