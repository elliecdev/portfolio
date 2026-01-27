import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import Card from "./Card";
import { projects } from "@/data/projects";
import { describe, it, expect } from "vitest";

describe("Card", () => {
  it("renders project title and description", () => {
    const project = projects[0];
    const { container, restore } = renderWithProviders(
      <Card project={project} index={0} />,
    );

    expect(screen.getByText(project.title)).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders project link with correct attributes", () => {
    const project = projects[0];
    const { restore } = renderWithProviders(
      <Card project={project} index={0} />,
    );

    if (project.link) {
      const link = screen.getByText(/View Project/i).closest("a");
      expect(link).toBeTruthy();
      expect(link).toHaveAttribute("href", project.link);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
    restore();
  });
});
