import { createGlobalStyle } from "styled-components";
import { Theme } from "../types";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.body}
  }
  *, ::before, ::after {
    box-sizing: border-box;
  }
`;
