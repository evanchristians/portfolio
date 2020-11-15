import { createGlobalStyle } from "styled-components";
import { Theme } from "../types";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  html, body {
    -ms-overflow-style: none; 
    scrollbar-width: none; 

    &::-webkit-scrollbar {
      display: none;
    }
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.mono};


  }
  *, ::before, ::after {
    box-sizing: border-box;
  }
`;
