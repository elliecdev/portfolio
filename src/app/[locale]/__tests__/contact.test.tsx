import React from "react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "@/test/renderWithProviders";
import ContactPage from "../contact/page";
import { describe, it, expect, vi } from "vitest";

// Mock usePathname for client component
vi.mock("next/navigation", () => ({
  usePathname: () => "/en/contact",
}));

describe("Contact Page", () => {
  it("renders English contact page", async () => {
    const { restore } = renderWithProviders(<ContactPage />, {
      route: "/en/contact",
    });

    expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument();
    expect(
      screen.getByText(/always open to new opportunities/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument();
    restore();
  });
});
