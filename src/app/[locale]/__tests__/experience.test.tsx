import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import ExperiencePage from "../experience/page";
import { describe, it, expect } from "vitest";

describe("Experience Page", () => {
  it("renders English experience page with translated title and content", async () => {
    const params = Promise.resolve({ locale: "en" as const });
    const pageContent = await ExperiencePage({ params });

    const { restore } = renderWithProviders(pageContent);

    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/professional journey/i)).toBeInTheDocument();

    // Check for English experience content
    expect(
      screen.getByText(/Associate Director, App Dev & DevOps/i),
    ).toBeInTheDocument();

    restore();
  });

  it("renders French experience page with translated content", async () => {
    const params = Promise.resolve({ locale: "fr" as const });
    const pageContent = await ExperiencePage({ params });

    const { restore } = renderWithProviders(pageContent);

    expect(screen.getByText(/Expérience/i)).toBeInTheDocument();
    expect(screen.getByText(/parcours professionnel/i)).toBeInTheDocument();

    // Check for French experience content
    expect(screen.getByText(/Directrice associée/i)).toBeInTheDocument();
    const pslGroups = screen.getAllByText(/PSL Group/i);
    expect(pslGroups.length).toBeGreaterThan(0);

    restore();
  });

  it("displays experience data correctly for English locale", async () => {
    const params = Promise.resolve({ locale: "en" as const });
    const pageContent = await ExperiencePage({ params });

    const { restore } = renderWithProviders(pageContent);

    // Should have multiple experience items
    const pslGroups = screen.getAllByText(/PSL Group/i);
    expect(pslGroups.length).toBe(5); // 5 experience items

    restore();
  });

  it("displays experience data correctly for French locale", async () => {
    const params = Promise.resolve({ locale: "fr" as const });
    const pageContent = await ExperiencePage({ params });

    const { restore } = renderWithProviders(pageContent);

    // Should have multiple experience items
    const pslGroups = screen.getAllByText(/PSL Group/i);
    expect(pslGroups.length).toBe(5); // 5 experience items

    restore();
  });
});
