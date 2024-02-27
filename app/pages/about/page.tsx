"use client";

import { Header } from "@/app/companents/header/header";
import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const TextBorder = styled.span`
  border: 1px solid #ffffff;
  padding: 5px;
  margin: 2px;

  color: white;
`;

export default function About() {
  return (
    <>
    <StyledSection>
      <BlackBox>
        <Header />
      </BlackBox>
      <WhiteBox></WhiteBox>
    </StyledSection>
  </>
  );
}
