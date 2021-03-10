import React from "react";
import styled from "styled-components";
import { colors, fontFamilies } from "../theme/theme";

const Title = styled.h1`
  margin-top: 5rem;
  font-size: 3.5em;
  font-family: ${fontFamilies.titles};
  font-weight: bold;

  > span {
    color: ${colors.accent};
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
