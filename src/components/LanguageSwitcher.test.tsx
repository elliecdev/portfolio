import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "@/test/renderWithProviders";
import LanguageSwitcher from "./LanguageSwitcher";
import { describe, it, expect } from "vitest";

describe("LanguageSwitcher", () => {
  it("renders language options EN and FR", () => {
    const { restore } = renderWithProviders(<LanguageSwitcher />, {
      route: "/en",
    });

    expect(screen.getByText("EN")).toBeInTheDocument();
    expect(screen.getByText("FR")).toBeInTheDocument();
    restore();
  });

  it("highlights current locale", () => {
    const { restore } = renderWithProviders(<LanguageSwitcher />, {
      route: "/en",
    });

    const enLink = screen.getByText("EN").closest("a");
    expect(enLink?.className).toContain("bg-accent");

    const frLink = screen.getByText("FR").closest("a");
    expect(frLink?.className).not.toContain("bg-accent");

    restore();
  });
});
