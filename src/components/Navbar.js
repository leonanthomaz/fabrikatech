import React from 'react';
import styled from 'styled-components';
import icon from '../assets/img/logo.png';

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLink = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <img src={icon} width={100} alt="Fabrika Tech" />
    <div>
      <NavbarLink href="/">Home</NavbarLink>
      {/* Add more links if needed */}
    </div>
  </NavbarContainer>
);

export default Navbar;
