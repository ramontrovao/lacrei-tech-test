import React from "react";
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

    const descriptionComponent = screen.getByRole("description");

    expect(descriptionComponent.textContent).toBe("This is a description test");
  });
});
