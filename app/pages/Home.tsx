import { m } from "framer-motion";
import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  margin-top: 100px;
  justify-content: space-evenly;
  align-items: center;
`;

const TextContainer = styled.div`
  font-size: 100px;
  font-weight: bold;
  color: white;
  z-index: 998;
  padding-bottom: 100px;

  @media (max-width: 1210px) {
    font-size: 65px;
  }
  @media (max-width: 995px) {
    font-size: 45px;
  }
`;
const ImageContainer = styled.div`
  background-image: url("/images/moon.png");
  background-size: cover;
  height: 600px;
  width: 600px;
  z-index: 998;

  @media (max-width: 1210px) {
    height: 450px;
    width: 450px;
  }

  @media (max-width: 995px) {
    height: 350px;
    width: 350px;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <TextContainer>Lorem Ipsum</TextContainer>
      <ImageContainer />
    </HomeContainer>
  );
}

export default Home;
