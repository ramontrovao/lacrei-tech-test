import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { Title } from "./";
import { DefaultTheme } from "@themes/DefaultTheme";

describe("<Title>", () => {
  it("should be able to render title component", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <Title text="This is a test" />
      </ThemeProvider>
    );

    screen.getByText("This is a test");
  });
});
