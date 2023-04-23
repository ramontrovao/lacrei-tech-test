import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { DefaultTheme } from "@themes/DefaultTheme";
import { LinkButtonAnchor } from "@components/LinkButtonAnchor";

const { COLORS } = DefaultTheme;

describe("Describe LinkButtonAnchor component", () => {
  it("should be able to render LinkButtonAnchor component", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <LinkButtonAnchor text="This is a LinkButtonAnchor test" />
      </ThemeProvider>
    );

    const linkButtonAnchorElement = screen.getByText(
      "This is a LinkButtonAnchor test"
    );

    expect(linkButtonAnchorElement).toBeInTheDocument();
  });

  it("should be able to render LinkButtonAnchor component with fill variant", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <LinkButtonAnchor
          text="This is a LinkAnchor test with fill variant"
          variant="fill"
        />
      </ThemeProvider>
    );

    const linkButtonAnchorElement = screen.getByText(
      "This is a LinkAnchor test with fill variant"
    );

    expect(linkButtonAnchorElement).toHaveStyle({
      background: COLORS.GREEN_500,
      color: COLORS.WHITE,
    });
  });

  it("should be able to render LinkButtonAnchor component with outline variant", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <LinkButtonAnchor
          text="This is a LinkAnchor test with outline variant"
          variant="outline"
        />
      </ThemeProvider>
    );

    const linkButtonAnchorElement = screen.getByText(
      "This is a LinkAnchor test with outline variant"
    );

    expect(linkButtonAnchorElement).toHaveStyle({
      background: "transparent",
      color: COLORS.GREEN_500,
      border: `2px solid ${COLORS.GREEN_500}`,
    });
  });
});
