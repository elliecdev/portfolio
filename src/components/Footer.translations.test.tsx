import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import Footer from "./Footer";
import { describe, it, expect } from "vitest";

describe("Footer Translations", () => {
  it("renders English footer with correct text", () => {
    const { restore } = renderWithProviders(<Footer locale="en" />);
    const year = new Date().getFullYear().toString();

    expect(
      screen.getByText((content) => content.includes(year)),
    ).toBeInTheDocument();
    expect(screen.getByText(/Ellie Coelho/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Built with Next.js & Tailwind/i),
    ).toBeInTheDocument();
    restore();
  });

  it("renders French footer with translated text", () => {
    const { restore } = renderWithProviders(<Footer locale="fr" />);
    const year = new Date().getFullYear().toString();

    expect(
      screen.getByText((content) => content.includes(year)),
    ).toBeInTheDocument();
    expect(screen.getByText(/Ellie Coelho/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Créé avec Next.js & Tailwind/i),
    ).toBeInTheDocument();
    restore();
  });
});
