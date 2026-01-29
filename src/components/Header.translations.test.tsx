import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import Header from "./Header";
import { describe, it, expect } from "vitest";

describe("Header Translations", () => {
  it("renders English navigation labels", async () => {
    const { restore } = renderWithProviders(<Header locale="en" />);

    // English labels
    expect(screen.getAllByText(/About/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Experience/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Projects/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Contact/i).length).toBeGreaterThanOrEqual(1);
    restore();
  });

  it("renders French navigation labels", async () => {
    const { restore } = renderWithProviders(<Header locale="fr" />);

    // French labels
    expect(screen.getAllByText(/À propos/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Expérience/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Projets/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Contact/i).length).toBeGreaterThanOrEqual(1);
    restore();
  });
});
