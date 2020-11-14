import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/Theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps}></Component>
    </ThemeProvider>
  );
};
export default App;
