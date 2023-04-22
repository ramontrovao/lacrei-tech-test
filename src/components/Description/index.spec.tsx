import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { Description } from "./";
import { DefaultTheme } from "@themes/DefaultTheme";

describe("<Description>", () => {
  it("should be able to render description component", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <Description text="This is a description test" />
      </ThemeProvider>
    );

    screen.getByText("This is a description test");
  });
});
