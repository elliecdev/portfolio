import React from "react";
import { render, screen } from "@testing-library/react";
import Technologies from "./Technologies";
import renderWithProviders from "@/test/renderWithProviders";
import { describe, it, expect } from "vitest";

describe("Technologies", () => {
  it("renders Technologies section with badges and badges are visible", () => {
    const { restore } = renderWithProviders(<Technologies />);
    expect(screen.getByText(/Technologies/i)).toBeInTheDocument();

    // at least one technology badge
    const tsBadge = screen.getByText(/TypeScript/i);
    expect(tsBadge).toBeInTheDocument();

    // IntersectionObserver mock makes badges visible
    expect((tsBadge as HTMLElement).className).toContain("opacity-100");
    restore();
  });
});
