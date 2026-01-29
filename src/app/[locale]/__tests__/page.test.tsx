import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import Home from "../page";
import { describe, it, expect } from "vitest";

describe("Home Page", () => {
  it("renders English home page with translated content", async () => {
    const params = Promise.resolve({ locale: "en" as const });
    const pageContent = await Home({ params });

    const { restore } = renderWithProviders(pageContent);

    // Hero section (heading with the title)
    expect(
      screen.getByRole("heading", { name: /Software Engineering Leader/i }),
    ).toBeInTheDocument();

    // About section
    expect(
      screen.getByRole("heading", { name: /About Me/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/I'm a software engineering leader with 20\+ years/i),
    ).toBeInTheDocument();

    // Competencies section
    expect(
      screen.getByRole("heading", { name: /Core Competencies/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Full-Stack Web Development/i)).toBeInTheDocument();

    // What I Do section
    expect(
      screen.getByRole("heading", { name: /What I Do/i }),
    ).toBeInTheDocument();

    restore();
  });

  it("renders French home page with translated content", async () => {
    const params = Promise.resolve({ locale: "fr" as const });
    const pageContent = await Home({ params });

    const { restore } = renderWithProviders(pageContent);

    // Hero section (heading with the title)
    expect(
      screen.getByRole("heading", { name: /Leader en ingénierie logicielle/i }),
    ).toBeInTheDocument();

    // About section
    expect(
      screen.getByRole("heading", { name: /À propos de moi/i }),
    ).toBeInTheDocument();

    // Check for French about text (may be split across elements)
    expect(
      screen.getByText(
        (content, element) =>
          content.includes("leader en ingénierie logicielle") &&
          content.includes("20 ans"),
      ),
    ).toBeInTheDocument();

    // Competencies section
    expect(
      screen.getByRole("heading", { name: /Compétences clés/i }),
    ).toBeInTheDocument();

    // What I Do section
    expect(
      screen.getByRole("heading", { name: /Ce que je fais/i }),
    ).toBeInTheDocument();

    restore();
  });
});
