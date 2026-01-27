import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { vi } from "vitest";
import * as nextNavigation from "next/navigation";

export type RenderOptions = {
  route?: string;
  isDark?: boolean;
};

// Renders UI with simple theme + pathname support for tests.
// Usage: const { getByText, restore } = renderWithProviders(<MyComp/>, { route: '/projects', isDark: true })
export function renderWithProviders(
  ui: React.ReactElement,
  options: RenderOptions = {},
): RenderResult & { restore: () => void } {
  const { route = "/", isDark = false } = options;

  // Sync theme state
  try {
    if (isDark) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {
    // noop in environments without storage
  }

  // Spy on next/navigation usePathname so components read our route
  const spy = vi
    .spyOn(nextNavigation as any, "usePathname")
    .mockImplementation(() => route);

  const result = render(ui);

  const restore = () => {
    spy.mockRestore();
  };

  return Object.assign(result, { restore });
}

export default renderWithProviders;
