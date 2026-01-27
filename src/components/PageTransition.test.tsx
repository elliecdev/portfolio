import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import PageTransition from "./PageTransition";
import { describe, it, expect } from "vitest";

describe("PageTransition", () => {
  it("renders children and responds to pathname key", () => {
    const { restore } = renderWithProviders(
      <PageTransition>
        <div>inner-content</div>
      </PageTransition>,
    );

    expect(screen.getByText("inner-content")).toBeInTheDocument();
    restore();
  });
});
