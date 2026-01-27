import "@testing-library/jest-dom";
import { vi } from "vitest";
import React from "react";

// Mock next/image to a simple img
vi.mock("next/image", () => {
  return {
    __esModule: true,
    default: (props: any) => {
      // eslint-disable-next-line jsx-a11y/alt-text
      return React.createElement("img", props);
    },
  };
});

// Mock next/navigation usePathname
vi.mock("next/navigation", () => {
  return {
    usePathname: () => "/",
  };
});

// Simple IntersectionObserver mock that immediately marks entries as intersecting
class MockIntersectionObserver {
  callback: any;
  constructor(cb: any) {
    this.callback = cb;
  }
  observe() {
    this.callback([{ isIntersecting: true }]);
  }
  unobserve() {}
  disconnect() {}
}

// @ts-ignore
global.IntersectionObserver = MockIntersectionObserver;

// matchMedia mock
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
