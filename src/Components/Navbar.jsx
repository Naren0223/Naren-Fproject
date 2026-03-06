import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom"; // Added useLocation

// --- Styled Components ---

const Nav = styled.nav`
  height: 64px;
  width: 100%;
  background-color: tomato;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const MenuIcon = styled.div`
  font-size: 28px;
  color: white;
  cursor: pointer;
  user-select: none;
`;

// Shared styles for both the Link version and the Static version of the logo
const logoStyles = css`
  font-family: 'Pacifico', cursive;
  font-size: 26px;
  color: white;
  text-decoration: none;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transform: rotate(-3deg);
  display: inline-block;
`;

const LogoLink = styled(Link)`
  ${logoStyles}
  transition: transform 0.2s;
  &:hover {
    transform: rotate(0deg) scale(1.1);
  }
`;

const LogoStatic = styled.div`
  ${logoStyles}
  cursor: default; /* Shows it is not a button */
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  background-color: tomato;
  width: 260px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-bottom-right-radius: 10px;
`;

const DropdownItem = styled.div`
  padding: 15px 20px;
  color: white;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  &:hover { background-color: #ff6347; }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  a { color: white; text-decoration: none; font-weight: 500; }
`;

// --- Component Logic ---

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current path

  // Check if we are currently on the About page
  const isAboutPage = location.pathname === "/about";

  return (
    <>
      <Nav>
        <LeftSection>
          <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</MenuIcon>

          {/* Conditional Rendering: Show Static text on About page, Link everywhere else */}
          {isAboutPage ? (
            <LogoStatic>All in one</LogoStatic>
          ) : (
            <LogoLink to="/about">All in one</LogoLink>
          )}
        </LeftSection>

        <DropdownMenu isOpen={isMenuOpen}>
          <DropdownItem onClick={() => setIsMenuOpen(false)}>🚗 Rides</DropdownItem>
          <DropdownItem onClick={() => setIsMenuOpen(false)}>🍕 Food</DropdownItem>
          <DropdownItem onClick={() => setIsMenuOpen(false)}>🎟️ Tickets</DropdownItem>
          <DropdownItem onClick={() => setIsMenuOpen(false)}>🎫 Download Travel Pass</DropdownItem>
        </DropdownMenu>

        <RightSection>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <button style={{
            background: 'white', color: 'tomato', border: 'none',
            borderRadius: '20px', padding: '8px 18px', fontWeight: 'bold', cursor: 'pointer'
          }}>
            Login
          </button>
        </RightSection>
      </Nav>
      <div style={{ height: "64px" }}></div>
    </>
  );
}