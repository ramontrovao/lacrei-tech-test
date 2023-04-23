import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { DefaultTheme } from "@themes/DefaultTheme";
import { Footer } from "@components/Footer";

describe("Describe Footer component", () => {
  it("should be able to render Footer component", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <Footer pageActive="/" />
      </ThemeProvider>
    );

    const footerElement = screen.getByRole("contentinfo");

    expect(footerElement).toBeInTheDocument();
  });

  it("should be able to render a Footer component with a anchor element with href equal /", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <Footer pageActive="/" />
      </ThemeProvider>
    );

    const linkElement = screen.getByRole("link", { name: "Home" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
