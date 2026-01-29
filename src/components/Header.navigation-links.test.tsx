import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import Header from "./Header";
import { describe, it, expect } from "vitest";

describe("Header Navigation Links", () => {
  describe("English locale (en)", () => {
    it("renders navigation links with correct English href paths", async () => {
      const { restore } = renderWithProviders(<Header locale="en" />);

      // Logo/About link
      const logoLink = screen.getByRole("link", { name: /Ellie Coelho/i });
      expect(logoLink).toHaveAttribute("href", "/en");

      // Check that nav items have correct hrefs by finding all links and filtering
      const allLinks = screen.getAllByRole("link");
      const experienceLink = allLinks.find((link) =>
        link.textContent?.includes("Experience"),
      );
      expect(experienceLink).toHaveAttribute("href", "/en/experience");

      const projectsLink = allLinks.find((link) =>
        link.textContent?.includes("Projects"),
      );
      expect(projectsLink).toHaveAttribute("href", "/en/projects");

      const contactLink = allLinks.find((link) =>
        link.textContent?.includes("Contact"),
      );
      expect(contactLink).toHaveAttribute("href", "/en/contact");

      restore();
    });
  });

  describe("French locale (fr)", () => {
    it("renders navigation links with correct French href paths", async () => {
      const { restore } = renderWithProviders(<Header locale="fr" />);

      // Logo/About link
      const logoLink = screen.getByRole("link", { name: /Ellie Coelho/i });
      expect(logoLink).toHaveAttribute("href", "/fr");

      // Check that nav items have correct hrefs by finding all links and filtering
      const allLinks = screen.getAllByRole("link");
      const experienceLink = allLinks.find((link) =>
        link.textContent?.includes("Expérience"),
      );
      expect(experienceLink).toHaveAttribute("href", "/fr/experience");

      const projectsLink = allLinks.find((link) =>
        link.textContent?.includes("Projets"),
      );
      expect(projectsLink).toHaveAttribute("href", "/fr/projects");

      const contactLink = allLinks.find((link) =>
        link.textContent?.includes("Contact"),
      );
      expect(contactLink).toHaveAttribute("href", "/fr/contact");

      restore();
    });
  });

  describe("Navigation locale-specific paths", () => {
    it("English navigation uses /en prefix for all locale-specific routes", async () => {
      const { restore } = renderWithProviders(<Header locale="en" />);

      const allLinks = screen.getAllByRole("link");
      const enLinks = allLinks.filter((link) => {
        const href = link.getAttribute("href");
        return href?.startsWith("/en");
      });

      // Should have at least 4 /en links (logo, experience, projects, contact)
      expect(enLinks.length).toBeGreaterThanOrEqual(4);
      enLinks.forEach((link) => {
        const href = link.getAttribute("href");
        expect(href).toMatch(/^\/en/);
      });

      restore();
    });

    it("French navigation uses /fr prefix for all locale-specific routes", async () => {
      const { restore } = renderWithProviders(<Header locale="fr" />);

      const allLinks = screen.getAllByRole("link");
      const frLinks = allLinks.filter((link) => {
        const href = link.getAttribute("href");
        return href?.startsWith("/fr");
      });

      // Should have at least 4 /fr links (logo, experience, projects, contact)
      expect(frLinks.length).toBeGreaterThanOrEqual(4);
      frLinks.forEach((link) => {
        const href = link.getAttribute("href");
        expect(href).toMatch(/^\/fr/);
      });

      restore();
    });
  });
});
