import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import Badge from "./Badge";
import { describe, it, expect } from "vitest";

describe("Badge", () => {
  it("renders the label text", () => {
    const { restore } = renderWithProviders(<Badge label="New" index={0} />);
    const el = screen.getByText("New");
    expect(el).toBeInTheDocument();

    // IntersectionObserver mock in test setup should mark visible: true
    // therefore animation class should include opacity-100
    expect(el.className).toContain("opacity-100");
    restore();
  });
});
