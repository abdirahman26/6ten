import React from "react";
import styled from "styled-components";
import { LuHeartHandshake } from "react-icons/lu";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-color: #0000007c;
`;

const StyledLogo = styled(LuHeartHandshake)`
  color: white;
  height: 90px;
  width: 90px;
  margin-right: auto;
  padding-left: 60px;
  padding-top: 10px;

  @media (max-width: 995px) {
    display: none;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding-right: 30px;
  gap: 40px;
  font-size: 20px;
  color: white;

  @media (max-width: 995px) {
    margin-left: 2px;
  }

  @media (max-width: 770px) {
    font-size: 15px;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

const StyledButton = styled.button`
  background-color: #10cf23;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 20px;
  margin-right: 60px;
  cursor: pointer;
`;

function NavBar() {
  return (
    <NavBarContainer>
      <StyledLogo />
      <LinksContainer>
        <a>Home</a>
        <a>Our Services</a>
        <a>Our Talent</a>
        <a>Ventrues</a>
      </LinksContainer>
      <StyledButton>Contact Us</StyledButton>
    </NavBarContainer>
  );
}

export default NavBar;
