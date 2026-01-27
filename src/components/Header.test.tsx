import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import { describe, it, expect } from "vitest";

describe("Header", () => {
  it("renders site title and navigation items", async () => {
    const { restore } = renderWithProviders(<Header />);

    // Title
    expect(screen.getByText(/Ellie Coelho/i)).toBeInTheDocument();

    // Navigation labels (may appear multiple times for mobile + desktop)
    expect(screen.getAllByText(/Experience/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Projects/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Contact/i).length).toBeGreaterThanOrEqual(1);

    // Dark mode toggle appears (render is deferred to mounted state)
    const toggles = await screen.findAllByLabelText("Toggle dark mode");
    expect(toggles.length).toBeGreaterThanOrEqual(1);
    restore();
  });

  it("toggles dark mode and opens/closes the mobile menu", async () => {
    const user = userEvent.setup();
    const { restore } = renderWithProviders(<Header />);

    // initial document class should not contain dark
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    const toggles = await screen.findAllByLabelText("Toggle dark mode");
    await user.click(toggles[0]);

    // toggling should update the document class
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    // open mobile menu
    const openBtn = screen.getByLabelText("Open menu");
    await user.click(openBtn);

    const closeBtn = await screen.findByLabelText("Close menu");
    expect(closeBtn).toBeInTheDocument();

    // panel should have translate-x-0 when open
    const panel = closeBtn.closest("div")!.parentElement!;
    expect(panel.className).toContain("translate-x-0");

    // close mobile menu
    await user.click(closeBtn);

    // panel should have translate-x-full when closed
    expect(panel.className).toContain("translate-x-full");
    restore();
  });
});
