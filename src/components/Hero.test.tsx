import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import Hero from "./Hero";
import { describe, it, expect } from "vitest";

describe("Hero", () => {
  it("renders heading and tech icons and icons become visible", async () => {
    const { container, restore } = renderWithProviders(<Hero />);

    expect(
      screen.getByText(/Software Engineering Leader/i),
    ).toBeInTheDocument();

    // Tech icons render as images due to the next/image mock
    const reactImg = screen.getByAltText("React");
    expect(reactImg).toBeInTheDocument();

    // parent wrapper div should have the visible class due to RAF in component
    const wrapper = reactImg.parentElement as HTMLElement;
    await waitFor(() => {
      expect(wrapper.className).toContain("opacity-100");
    });
    restore();
  });
});
