import React from 'react';
import Link from 'gatsby-link';

import { colors } from '../../utils/style';

import styled, { keyframes } from 'styled-components';

const Nav = styled.nav`
  display: flex;
  margin-bottom: 30px;

  @media (min-width: 600px) {
    justify-content: flex-end;
  }
`;

const activeClassName = 'active';

const StyledNavLink = styled(Link).attrs({
  activeClassName
})`
  margin: 0 20px 0 0;
  font-weight: 600;
  color: ${colors.linkColor};
  transition: 0.2s;
  position: relative;

  :hover {
    color: ${colors.linkHover};
    text-decoration: none;
  }

  :after {
    content: '';
    border-bottom: 2px dotted #EEE;
    width: 100%;
    height: 10%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
  }

  @media (min-width: 600px) {
    margin: 0 0 0 20px;
  }

  &.${activeClassName} {

    :after {
      transition: 0.2s;
      transform: translateY(1px);
      content: '';
      width: 100%;
      height: 10%;
      border-bottom: 2px dotted ${colors.linkColor};
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const NavEmoji = styled.span`
  display: none;

  @media (min-width: 600px) {
    display: inline;
  }
`;

const Navigation = () => (
  <Nav>
    <StyledNavLink exact to="/">
      <NavEmoji>🏠 </NavEmoji>Home
    </StyledNavLink>
    <StyledNavLink to="/writing">
      <NavEmoji>📕 </NavEmoji>Writing
    </StyledNavLink>
  </Nav>
);

export default Navigation;