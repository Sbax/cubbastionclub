import React from "react";
import styled from "styled-components";
import { Container as DefaultContainer } from "./Container";
import Logo from "./Logo";
import Members from "./Members";

const Container = styled(DefaultContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
`;

function Main() {
  return (
    <Container as="main">
      <Logo />
      <Members />
    </Container>
  );
}

export default Main;
