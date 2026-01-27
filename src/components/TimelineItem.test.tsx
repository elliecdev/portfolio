import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import TimelineItem from "./TimelineItem";
import { experience } from "@/data/experience";
import { describe, it, expect } from "vitest";

describe("TimelineItem", () => {
  it("renders role, company and description bullets", () => {
    const item = experience[0];
    const { restore } = renderWithProviders(
      <TimelineItem item={item} index={0} />,
    );

    expect(screen.getByText(item.role)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(item.company.split("|")[0].trim())),
    ).toBeInTheDocument();
    // description first bullet should render
    expect(
      screen.getByText(new RegExp(item.description[0].slice(0, 10))),
    ).toBeInTheDocument();
    // badges inside should be visible due to IntersectionObserver mock
    const techBadge = screen.getByText(item.tech[0]);
    expect((techBadge as HTMLElement).className).toContain("opacity-100");
    restore();
  });
});
