import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { DefaultTheme } from "@themes/DefaultTheme";
import Profissional from "@pages/profissional";

test("should be able to render Profissional page", () => {
  render(
    <ThemeProvider theme={DefaultTheme}>
      <Profissional />
    </ThemeProvider>
  );

  const mainElement = screen.getByRole("main");

  expect(mainElement).toBeInTheDocument();
});
