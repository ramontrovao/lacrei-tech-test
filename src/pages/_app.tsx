import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { DefaultLayout } from "@layouts/DefaultLayout";

import { DefaultTheme } from "@themes/DefaultTheme";

import { GlobalStyle } from "@styles/Global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={DefaultTheme}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}
