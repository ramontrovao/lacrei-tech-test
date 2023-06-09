import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { Title } from "@components/Title";
import { DefaultTheme } from "@themes/DefaultTheme";

test("should be able to render title component", () => {
  render(
    <ThemeProvider theme={DefaultTheme}>
      <Title text="This is a title test" />
    </ThemeProvider>
  );

  const titleElement = screen.getByRole("heading");

  expect(titleElement).toHaveTextContent("This is a title test");
});
