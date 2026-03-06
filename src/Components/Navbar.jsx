import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";

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
  cursor: default;
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

// --- NEW MODAL STYLES ---
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  background: #252525;
  padding: 30px;
  border-radius: 15px;
  width: 320px;
  text-align: center;
  color: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 5px;
  border: 1px solid #444;
  background: #111;
  color: white;
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 10px;
  background: tomato;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
`;

// --- Component Logic ---

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // Modal visibility
  const [isLogin, setIsLogin] = useState(true); // Toggle Login/Register

  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? "Connecting to Java Backend for Login..." : "Connecting to Java Backend for Registration...");
    // Future step: add fetch() to your Java server here
  };

  return (
    <>
      <Nav>
        <LeftSection>
          <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</MenuIcon>
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
          {/*<Link to="/menu">Menu</Link>*/}
          {/* TRIGGER MODAL HERE */}
          <button
            onClick={() => setShowModal(true)}
            style={{
              background: 'white', color: 'tomato', border: 'none',
              borderRadius: '20px', padding: '8px 18px', fontWeight: 'bold', cursor: 'pointer'
            }}
          >
            Login
          </button>
        </RightSection>
      </Nav>
      <div style={{ height: "64px" }}></div>

      {/* LOGIN/REGISTER MODAL */}
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>{isLogin ? "Sign In" : "Register"}</h3>
            <form onSubmit={handleFormSubmit}>
              {!isLogin && <StyledInput type="text" placeholder="Full Name" required />}
              <StyledInput type="email" placeholder="Email" required />
              <StyledInput type="password" placeholder="Password" required />
              <SubmitBtn type="submit">{isLogin ? "Login" : "Join Now"}</SubmitBtn>
            </form>
            <p
              onClick={() => setIsLogin(!isLogin)}
              style={{ fontSize: "12px", marginTop: "15px", cursor: "pointer", color: "tomato" }}
            >
              {isLogin ? "New user? Create account" : "Have an account? Login"}
            </p>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}