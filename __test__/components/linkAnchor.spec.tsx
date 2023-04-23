import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { DefaultTheme } from "@themes/DefaultTheme";
import { LinkAnchor } from "@components/LinkAnchor";

const { COLORS } = DefaultTheme;

describe("Describe LinkAnchor component", () => {
  it("should be able to render LinkAnchor component", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <LinkAnchor text="This is a LinkAnchor test" />
      </ThemeProvider>
    );

    const linkAnchorElement = screen.getByText("This is a LinkAnchor test");

    expect(linkAnchorElement).toBeInTheDocument();
  });

  it("should be able to render LinkAnchor component with gray variant", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <LinkAnchor
          text="This is a LinkAnchor test with gray variant"
          variant="gray"
        />
      </ThemeProvider>
    );

    const linkAnchorElement = screen.getByText(
      "This is a LinkAnchor test with gray variant"
    );

    expect(linkAnchorElement).toHaveStyle({
      color: COLORS.GRAY_500,
      fontWeight: 400,
    });
  });

  it("should be able to render LinkAnchor component with green variant", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <LinkAnchor
          text="This is a LinkAnchor test with green variant"
          variant="green"
        />
      </ThemeProvider>
    );

    const linkAnchorElement = screen.getByText(
      "This is a LinkAnchor test with green variant"
    );

    expect(linkAnchorElement).toHaveStyle({
      color: COLORS.GRAY_500,
      fontWeight: 700,
    });
  });

  it("should be able to render LinkAnchor component in active form", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <LinkAnchor
          text="This is a LinkAnchor test with active form"
          isActive
        />
      </ThemeProvider>
    );

    const linkAnchorElement = screen.getByText(
      "This is a LinkAnchor test with active form"
    );

    expect(linkAnchorElement).toHaveStyle({
      color: COLORS.GREEN_500,
      fontWeight: 700,
    });
  });
});
