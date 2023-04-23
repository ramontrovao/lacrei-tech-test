import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { DefaultTheme } from "@themes/DefaultTheme";
import { Description } from "@components/Description";

describe("Describe description component", () => {
  it("should be able to render description component", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <Description text="This is a description test" />
      </ThemeProvider>
    );

    const descriptionElement = screen.getByRole("description");

    expect(descriptionElement).toHaveTextContent("This is a description test");
  });

  it("should be able to render description component with bar", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <Description text="This is a description with bar test" hasBar />
      </ThemeProvider>
    );

    const descriptionElement = screen.getByRole("description");

    expect(descriptionElement).toHaveStyle("paddingLeft: 1rem");
  });
});
