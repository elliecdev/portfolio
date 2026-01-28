"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";

const navItems = [
  { label: "About", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const { isDark, toggle } = useDarkMode();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // safe, runs only on client
  }, []);

  useEffect(() => {
    // defer setState to next tick to avoid synchronous update warning
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  /* Shrink + shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Escape key + click outside for mobile menu */
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <>
      {/* Header */}
      <header
        className={`
          sticky top-0 z-50
          bg-gray-50 dark:bg-gray-900
          border-b border-gray-200 dark:border-gray-800
          transition-all duration-300 ease-out
          ${scrolled ? "shadow-lg py-3" : "shadow-sm py-4"}
        `}
      >
        <nav className="flex items-center justify-between max-w-5xl px-6 mx-auto">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`
              font-bold tracking-tight md:tracking-normal text-accent dark:text-accent/80
              transition-all duration-300 hover:opacity-90
              ${scrolled ? "text-lg" : "text-xl"}
            `}
          >
            Ellie Coelho
          </Link>

          {/* Desktop Navigation + Dark/Light toggle */}
          <div className="items-center hidden gap-8 md:flex">
            <ul className="flex gap-6 text-base font-medium tracking-wide">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`
                        relative inline-block pb-1 no-underline
                        transition-colors duration-300
                        ${
                          isActive
                            ? "text-accent dark:text-accent/80"
                            : "text-gray-700 dark:text-gray-300 hover:text-accent"
                        }
                        after:absolute after:left-1/2 after:-bottom-0.5
                        after:w-full after:-translate-x-1/2
                        after:origin-center after:scale-x-0
                        after:bg-accent
                        after:transition-transform after:duration-300
                        ${
                          isActive
                            ? "after:h-[3px] after:scale-x-100"
                            : "after:h-[2px] hover:after:scale-x-100"
                        }
                        hover:[text-shadow:0_0_8px_rgba(122,115,209,0.25)]
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Dark mode toggle */}
            {mounted && (
              <button
                onClick={toggle}
                aria-label="Toggle dark mode"
                className="text-xl transition-transform hover:scale-110"
              >
                {isDark ? "🌙" : "☀️"}
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            {mounted && ( // only render after mount
              <button
                onClick={toggle}
                aria-label="Toggle dark mode"
                className="text-xl transition-transform hover:scale-110"
              >
                {isDark ? "🌙" : "☀️"}
              </button>
            )}

            <button
              className="text-2xl text-gray-700 dark:text-gray-300"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Mobile Panel */}
      <div
        ref={panelRef}
        className={`fixed top-0 right-0 z-50 h-full w-72
          bg-white dark:bg-gray-900
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6">
          <button
            className="mb-6 text-gray-700 dark:text-gray-300"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block text-lg font-medium transition-colors ${
                      isActive
                        ? "text-accent dark:text-accent/80"
                        : "text-gray-700 dark:text-gray-300 hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
