import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/Theme";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&family=Work+Sans:wght@100;400;900&display=block"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/ce5d40ef27.js" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps}></Component>
    </ThemeProvider>
  );
};
export default App;
