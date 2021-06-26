import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

import { animateScroll as scroll } from 'react-scroll';
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
  NavMotion,
  MobileIcon,
} from './NavBarStyle';

const navLinks = [
  { name: 'Services', to: 'services' },
  { name: 'Features', to: 'features' },
  { name: 'Pricing', to: 'pricing' },
  { name: 'Resources', to: 'resources' },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      type: 'tween',
      duration: 1.2,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const logoContainerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
      stiffness: 50,
    },
  },
  exit: {
    x: '100vw',
    transition: { ease: 'easeInOut' },
  },
};

const linkVariants = {
  hover: {
    scale: 1.05,
    textShadow: '0px 0px .2px rgb(0, 0, 0)',

    transition: {
      delay: 0.2,
      yoyo: 3,
    },
  },
};

const Navbar = () => {
  const [scrollNav, setScrollNave] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNave(true);
    } else {
      setScrollNave(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <NavLogoContainer
            variants={logoContainerVariants}
            onClick={toggleHome}
          >
            <NavLogo
              src="https://techforing.com/tfimg/logo.png"
              alt="techforing-logo"
            />
          </NavLogoContainer>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {navLinks.map((link, index) => {
              const { name, to } = link;

              return (
                <NavItems key={index}>
                  <NavMotion variants={linkVariants} whileHover="hover">
                    <NavLinks
                      to={to}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                    >
                      {name}
                    </NavLinks>
                  </NavMotion>
                </NavItems>
              );
            })}
          </NavMenu>
          <NavBtn>
            <NavBtnLink>JOIN US</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
