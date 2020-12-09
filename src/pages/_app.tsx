import { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/Theme";
import * as gtag from "../lib/gtag";
import GoogleFonts from "next-google-fonts";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;800&display=swap" />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@800;900&display=swap" />
      <GlobalStyle />
      <Component {...pageProps}></Component>
    </ThemeProvider>
  );
};
export default App;
