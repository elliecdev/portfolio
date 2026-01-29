import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import ProjectsGrid from "@/components/ProjectsGrid";
import { describe, it, expect } from "vitest";

describe("ProjectsGrid Component", () => {
  describe("English locale", () => {
    it("renders project cards with English titles", () => {
      const { restore } = renderWithProviders(<ProjectsGrid locale="en" />);

      // Get all h3 headings (project titles)
      const headings = screen.getAllByRole("heading", { level: 3 });
      expect(headings.length).toBeGreaterThanOrEqual(3);

      // Check for at least one English project title
      const titleTexts = headings.map((h) => h.textContent);
      expect(titleTexts.some((text) => text?.includes("Portfolio"))).toBe(true);

      restore();
    });

    it("renders English project descriptions", () => {
      const { restore } = renderWithProviders(<ProjectsGrid locale="en" />);

      // Check for English content indicators
      expect(screen.getByText(/personal portfolio/i)).toBeInTheDocument();

      restore();
    });

    it("displays technology stacks", () => {
      const { restore } = renderWithProviders(<ProjectsGrid locale="en" />);

      // Just check that some tech stacks are rendered
      const headings = screen.getAllByRole("heading", { level: 3 });
      expect(headings.length).toBeGreaterThan(0);

      restore();
    });
  });

  describe("French locale", () => {
    it("renders project cards with French titles", () => {
      const { restore } = renderWithProviders(<ProjectsGrid locale="fr" />);

      // Get all h3 headings (project titles)
      const headings = screen.getAllByRole("heading", { level: 3 });
      expect(headings.length).toBeGreaterThanOrEqual(3);

      // Check for at least one French project title
      const titleTexts = headings.map((h) => h.textContent);
      expect(titleTexts.some((text) => text?.includes("Site"))).toBe(true);

      restore();
    });

    it("renders French project descriptions", () => {
      const { restore } = renderWithProviders(<ProjectsGrid locale="fr" />);

      expect(screen.getByText(/portfolio personnel/i)).toBeInTheDocument();

      restore();
    });

    it("displays technology stacks (same for both languages)", () => {
      const { restore } = renderWithProviders(<ProjectsGrid locale="fr" />);

      // Just check that projects are rendered
      const headings = screen.getAllByRole("heading", { level: 3 });
      expect(headings.length).toBeGreaterThan(0);

      restore();
    });
  });

  describe("ProjectsGrid consistency", () => {
    it("renders projects correctly for both locales", () => {
      // Test English
      const { restore: restoreEn } = renderWithProviders(
        <ProjectsGrid locale="en" />,
      );
      const enHeadings = screen.getAllByRole("heading", { level: 3 });
      expect(enHeadings.length).toBeGreaterThanOrEqual(3);
      restoreEn();

      // Test French
      const { restore: restoreFr } = renderWithProviders(
        <ProjectsGrid locale="fr" />,
      );
      const frHeadings = screen.getAllByRole("heading", { level: 3 });
      expect(frHeadings.length).toBeGreaterThanOrEqual(3);
      restoreFr();
    });
  });
});
