import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@styles/Global";
import { DefaultTheme } from "@themes/DefaultTheme";
import { DefaultLayout } from "@layouts/DefaultLayout";

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
