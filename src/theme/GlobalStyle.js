import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { colors, fontFamilies } from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100%;
    overflow: auto;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    font-family: ${fontFamilies.body};
    background-color: ${colors.mainBg};
    color: ${colors.text};
  }

  a {
    color: ${colors.accent};
    text-decoration: none;

    opacity: 0.7;
    transition: opacity 300ms ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`;

export default GlobalStyle;
