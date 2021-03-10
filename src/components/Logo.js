import React from "react";
import styled from "styled-components";
import { breakpoints, colors, fontFamilies } from "../theme/theme";

const Title = styled.h1`
  margin-top: 5rem;
  font-size: 3.5em;
  font-family: ${fontFamilies.titles};
  font-weight: bold;
  text-align: center;

  > span {
    display: inline-block;
    color: ${colors.accent};
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    margin-top: 0;
  }
`;

function Logo() {
  return (
    <Title>
      cubbastion<span>.club</span>
    </Title>
  );
}

export default Logo;
