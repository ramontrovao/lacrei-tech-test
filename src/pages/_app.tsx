import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@/styles/Global";
import { DefaultTheme } from "@/themes/DefaultTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={DefaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
