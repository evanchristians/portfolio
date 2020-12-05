import { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/Theme";
import * as gtag from "../lib/gtag";

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
      <GlobalStyle />
      <Component {...pageProps}></Component>
    </ThemeProvider>
  );
};
export default App;
