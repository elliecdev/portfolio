import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import Footer from "./Footer";
import { describe, it, expect } from "vitest";

describe("Footer", () => {
  it("renders copyright and name", () => {
    const { restore } = renderWithProviders(<Footer />);
    const year = new Date().getFullYear().toString();
    // the year may be split among nodes; use a flexible matcher
    expect(
      screen.getByText((content) => content.includes(year)),
    ).toBeInTheDocument();
    expect(screen.getByText(/Ellie Coelho/i)).toBeInTheDocument();
    restore();
  });
});
