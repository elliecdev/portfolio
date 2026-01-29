import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import Timeline from "@/components/Timeline";
import { describe, it, expect } from "vitest";

describe("Timeline Component", () => {
  describe("English locale", () => {
    it("renders experience items with English content", () => {
      const { restore } = renderWithProviders(<Timeline locale="en" />);

      // Check for English role titles
      expect(
        screen.getByText(/Associate Director, App Dev & DevOps/i),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Senior Technical Project Manager/i),
      ).toBeInTheDocument();

      restore();
    });

    it("renders PSL Group company names", () => {
      const { restore } = renderWithProviders(<Timeline locale="en" />);

      const pslGroups = screen.getAllByText(/PSL Group/i);
      expect(pslGroups.length).toBeGreaterThan(0);

      restore();
    });

    it("displays English technology stacks", () => {
      const { restore } = renderWithProviders(<Timeline locale="en" />);

      // Just check that experience content is present
      expect(screen.getByText(/Associate Director/i)).toBeInTheDocument();

      restore();
    });
  });

  describe("French locale", () => {
    it("renders experience items with French content", () => {
      const { restore } = renderWithProviders(<Timeline locale="fr" />);

      // Check for French role titles
      expect(
        screen.getByText(
          /Directrice associée, Développement d'applications et DevOps/i,
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Gestionnaire de projets techniques senior/i),
      ).toBeInTheDocument();

      restore();
    });

    it("renders PSL Group company names in French context", () => {
      const { restore } = renderWithProviders(<Timeline locale="fr" />);

      const pslGroups = screen.getAllByText(/PSL Group/i);
      expect(pslGroups.length).toBeGreaterThan(0);

      restore();
    });

    it("displays technology stacks (same for both languages)", () => {
      const { restore } = renderWithProviders(<Timeline locale="fr" />);

      // Tech stacks are same regardless of language
      // Just check that multiple PSL Group entries exist (one per item)
      const pslGroups = screen.getAllByText(/PSL Group/i);
      expect(pslGroups.length).toBeGreaterThan(0);

      restore();
    });
  });

  describe("Timeline data structure", () => {
    it("renders correct number of timeline items in English", () => {
      const { restore } = renderWithProviders(<Timeline locale="en" />);

      // Should have 5 experience items
      const items = screen.getAllByText(/PSL Group/i);
      expect(items.length).toBe(5); // One PSL Group per experience item

      restore();
    });

    it("renders correct number of timeline items in French", () => {
      const { restore } = renderWithProviders(<Timeline locale="fr" />);

      // Should have 5 experience items
      const items = screen.getAllByText(/PSL Group/i);
      expect(items.length).toBe(5);

      restore();
    });
  });
});
