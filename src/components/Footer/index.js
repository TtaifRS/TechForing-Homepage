import React from 'react';
import {
  Facebook,
  YouTube,
  LinkedIn,
  Instagram,
  Twitter,
} from '@material-ui/icons';

import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcon,
  SocialIconLink,
} from './FooterElement';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Company</FooterLinkTitle>
              <FooterLink to="/">ABOUT US</FooterLink>
              <FooterLink to="/">LEADERSHIP</FooterLink>
              <FooterLink to="/">CLIENTS & THEIR STORIES</FooterLink>
              <FooterLink to="/">PARTNERSHIP PROGRAM</FooterLink>
              <FooterLink to="/">Franchise Program</FooterLink>
              <FooterLink to="/">INVESTOR RELATION</FooterLink>
              <FooterLink to="/">career</FooterLink>
              <FooterLink to="/">find us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>popular links</FooterLinkTitle>
              <FooterLink to="/">Risk Assessment</FooterLink>
              <FooterLink to="/">Business Incident Response</FooterLink>
              <FooterLink to="/">SMB Solution</FooterLink>
              <FooterLink to="/">Security Compliance</FooterLink>
              <FooterLink to="/">Concierge Cybersecurity</FooterLink>
              <FooterLink to="/">Cyber Investigation </FooterLink>
              <FooterLink to="/">Data Removal</FooterLink>
              <FooterLink to="/">Hack Recovery for Individual </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Resources</FooterLinkTitle>
              <FooterLink to="/">Case Studies</FooterLink>
              <FooterLink to="/">Reports & Whitepapers</FooterLink>
              <FooterLink to="/">Industrywide Guides</FooterLink>
              <FooterLink to="/">Tutorials</FooterLink>
              <FooterLink to="/">Securitymania</FooterLink>
              <FooterLink to="/">Events & Webinars</FooterLink>
              <FooterLink to="/">sitemap</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>legal</FooterLinkTitle>
              <FooterLink to="/"> Privacy Policy</FooterLink>
              <FooterLink to="/">Terms of Use</FooterLink>
              <FooterLink to="/">Trust Centre </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              TechForing
            </SocialLogo>
            <WebsiteRights>
              TechForing © {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcon>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <Facebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <YouTube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <Twitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <Instagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <LinkedIn />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
