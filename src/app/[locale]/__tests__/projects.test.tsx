import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import ProjectsPage from "../projects/page";
import { describe, it, expect } from "vitest";

describe("Projects Page", () => {
  it("renders English projects page with translated title and content", async () => {
    const params = Promise.resolve({ locale: "en" as const });
    const pageContent = await ProjectsPage({ params });

    const { restore } = renderWithProviders(pageContent);

    expect(
      screen.getByRole("heading", { name: /Projects/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/selected works/i)).toBeInTheDocument();

    // Check for English project content
    expect(screen.getByText(/Portfolio Website/i)).toBeInTheDocument();
    expect(screen.getByText(/Step Challenges/i)).toBeInTheDocument();

    restore();
  });

  it("renders French projects page with translated content", async () => {
    const params = Promise.resolve({ locale: "fr" as const });
    const pageContent = await ProjectsPage({ params });

    const { restore } = renderWithProviders(pageContent);

    expect(
      screen.getByRole("heading", { name: /Projets/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/travaux sélectionnés/i)).toBeInTheDocument();

    // Check for French project content
    expect(screen.getByText(/Site Portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/Défis d'étapes/i)).toBeInTheDocument();

    restore();
  });

  it("displays projects with correct English titles and descriptions", async () => {
    const params = Promise.resolve({ locale: "en" as const });
    const pageContent = await ProjectsPage({ params });

    const { restore } = renderWithProviders(pageContent);

    expect(
      screen.getByText(/personal portfolio to showcase/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/organize participants, teams and track progress/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Personal Book Club app/i)).toBeInTheDocument();

    restore();
  });

  it("displays projects with correct French titles and descriptions", async () => {
    const params = Promise.resolve({ locale: "fr" as const });
    const pageContent = await ProjectsPage({ params });

    const { restore } = renderWithProviders(pageContent);

    expect(
      screen.getByText(/portfolio personnel pour mettre en valeur/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/organiser les participants, les équipes/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Application personnelle de club de lecture/i),
    ).toBeInTheDocument();

    restore();
  });
});
