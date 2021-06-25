import React from 'react';
import {
  Nav,
  NavContainer,
  NavLogo,
  NavItems,
  NavMenu,
  NavLinks,
  NavLogoContainer,
  NavBtn,
  NavBtnLink,
} from './NavBarStyle';

const navLinks = [
  { name: 'Services' },
  { name: 'Pricing' },
  { name: 'Features' },
  { name: 'Resources' },
];

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogoContainer>
            <NavLogo
              src="https://techforing.com/tfimg/logo.png"
              alt="techforing-logo"
            />
          </NavLogoContainer>

          <NavMenu>
            {navLinks.map((link, index) => {
              const { name } = link;

              return (
                <NavItems key={index}>
                  <NavLinks>{name}</NavLinks>
                </NavItems>
              );
            })}
          </NavMenu>
          <NavBtn>
            <NavBtnLink>Sign In</NavBtnLink>
            <NavBtnLink style={{ background: '#182F59', color: 'white' }}>
              Sign Up
            </NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
