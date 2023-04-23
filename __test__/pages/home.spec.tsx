import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { DefaultTheme } from "@themes/DefaultTheme";
import Home from "@pages/index";

test("should be able to render Home page", () => {
  render(
    <ThemeProvider theme={DefaultTheme}>
      <Home />
    </ThemeProvider>
  );

  const mainElement = screen.getByRole("main");

  expect(mainElement).toBeInTheDocument();
});
