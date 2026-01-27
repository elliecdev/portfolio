import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import Timeline from "./Timeline";
import { experience } from "@/data/experience";
import { describe, it, expect } from "vitest";

describe("Timeline", () => {
  it("renders at least one timeline item from data and shows timeline line animation", () => {
    const { container, restore } = renderWithProviders(<Timeline />);
    expect(screen.getByText(experience[0].role)).toBeInTheDocument();

    // vertical timeline line has aria-hidden and should be visible due to IntersectionObserver mock
    const line = container.querySelector("span[aria-hidden]");
    expect(line).toBeTruthy();
    expect((line as HTMLElement).className).toContain("scale-y-100");
    restore();
  });
});
