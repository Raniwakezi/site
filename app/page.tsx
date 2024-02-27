"use client";
import styled from "styled-components";
import { Header } from "./companents/header/header";
import { GlobalStyles } from "./global-styles";
import { BlackSide } from "./companents/blackSide";
import { WhiteSide } from "./companents/whiteSide";

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
`;

const BlackBox = styled.div`
  height: 100vh;
  width: 50%;
  background-color: black;
`;
const WhiteBox = styled.div`
  height: 100vh;
  width: 50%;
  background-color: white;
`;

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <StyledSection>
        <BlackBox>
          <Header />

          <BlackSide />
        </BlackBox>
        <WhiteBox>
          <WhiteSide />
        </WhiteBox>
      </StyledSection>
    </>
  );
}
