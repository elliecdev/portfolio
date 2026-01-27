import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactButton from "./ContactButton";
import renderWithProviders from "@/test/renderWithProviders";
import { describe, it, expect } from "vitest";

describe("ContactButton", () => {
  it("renders label and icon", () => {
    const { restore } = renderWithProviders(
      <ContactButton href="#" label="Email" icon={<span>✉️</span>} />,
    );

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("✉️")).toBeInTheDocument();
  });

  it("focuses link on click", async () => {
    const user = userEvent.setup();
    const { restore } = renderWithProviders(
      <ContactButton href="#" label="Email" icon={<span>✉️</span>} />,
    );

    const link = screen.getByText("Email").closest("a") as HTMLAnchorElement;
    await user.click(link);
    expect(document.activeElement).toBe(link);
    restore();
  });
});
