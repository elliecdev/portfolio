import React from "react";
import { render, screen } from "@testing-library/react";
import Section from "./Section";
import renderWithProviders from "@/test/renderWithProviders";
import { describe, it, expect } from "vitest";

describe("Section", () => {
  it("renders title, subtitle and children and becomes visible", () => {
    const { container, restore } = renderWithProviders(
      <Section title="My Title" subtitle="My Subtitle">
        <div>child</div>
      </Section>,
    );

    expect(screen.getByText("My Title")).toBeInTheDocument();
    expect(screen.getByText("My Subtitle")).toBeInTheDocument();
    expect(screen.getByText("child")).toBeInTheDocument();

    // IntersectionObserver in setup marks it visible, so section should have visible classes
    const section = container.querySelector("section");
    expect(section).toBeTruthy();
    expect((section as HTMLElement).className).toContain("opacity-100");
    restore();
  });
});
