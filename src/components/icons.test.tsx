import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import { EnvelopeIcon, GitHubIcon, ReactIcon } from "./icons";
import { describe, it, expect } from "vitest";

describe("icons", () => {
  it("renders SVG icons", () => {
    const { restore } = renderWithProviders(
      <div>
        <EnvelopeIcon />
        <GitHubIcon />
        <ReactIcon />
      </div>,
    );

    // ensure at least one svg is present; prefer role if available but fallback to svg tags
    const svgs = screen.queryAllByRole("img", { hidden: true });
    if (svgs.length > 0) {
      expect(svgs.length).toBeGreaterThanOrEqual(1);
    } else {
      const svgEls = document.querySelectorAll("svg");
      expect(svgEls.length).toBeGreaterThanOrEqual(1);
    }
    restore();
  });
});
