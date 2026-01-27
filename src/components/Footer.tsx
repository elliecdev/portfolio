"use client";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // 🔒 animate only once
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-gray-800
    transition-colors duration-400 ease-in-out
    ${visible ? "opacity-100 translate-y-0 transition-transform duration-500 ease-out" : "opacity-0 translate-y-4"}
  `}
    >
      <div className="max-w-5xl px-6 py-10 mx-auto text-sm leading-relaxed tracking-wide text-center text-gray-600 transition-colors ease-in-out dark:text-gray-400 duration-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium transition-colors ease-in-out text-accent dark:text-accent/80 duration-400">
          Ellie Coelho
        </span>{" "}
        — Built with Next.js & Tailwind
      </div>
    </footer>
  );
}
