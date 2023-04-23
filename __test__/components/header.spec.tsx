import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { DefaultTheme } from "@themes/DefaultTheme";
import { Header } from "@components/Header";

describe("Describe Header component", () => {
  it("should be able to render Header component", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <Header pageActive="/" />
      </ThemeProvider>
    );

    const headerElement = screen.getByRole("banner");

    expect(headerElement).toBeInTheDocument();
  });

  it("should be able to render a Header component with a anchor element with href equal /", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <Header pageActive="/" />
      </ThemeProvider>
    );

    const linkElement = screen.getByRole("link", { name: "Home" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
