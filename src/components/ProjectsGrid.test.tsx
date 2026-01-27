import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import ProjectsGrid from "./ProjectsGrid";
import { projects } from "@/data/projects";
import { describe, it, expect } from "vitest";

describe("ProjectsGrid", () => {
  it("renders at least one project card", () => {
    const { restore } = renderWithProviders(<ProjectsGrid />);
    expect(screen.getByText(projects[0].title)).toBeInTheDocument();
    restore();
  });
});
