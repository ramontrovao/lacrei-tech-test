import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { DefaultTheme } from "@themes/DefaultTheme";
import PessoaUsuaria from "@pages/pessoa-usuaria";

test("should be able to render Pessoa Usuária page", () => {
  render(
    <ThemeProvider theme={DefaultTheme}>
      <PessoaUsuaria />
    </ThemeProvider>
  );

  const mainElement = screen.getByRole("main");

  expect(mainElement).toBeInTheDocument();
});
