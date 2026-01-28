"use client";

import { useEffect, useRef, useState } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate only once
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
      className={`
        bg-gray-100 dark:bg-gray-900
        border-t border-gray-200 dark:border-gray-800
        shadow-sm dark:shadow-gray-800
        transition-all duration-500 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      <div className="max-w-5xl px-6 py-10 mx-auto text-sm leading-relaxed tracking-wide text-center text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-accent dark:text-accent/80">
          Ellie Coelho
        </span>{" "}
        — Built with Next.js & Tailwind
        {/* Social icons */}
        <div
          className={`
            flex justify-center gap-5 mt-4
            transition-all duration-500 ease-out
            ${visible ? "opacity-100 translate-y-0 delay-150" : "opacity-0 translate-y-2"}
          `}
        >
          <a
            href="https://github.com/elliecdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
            className="
              text-gray-500 dark:text-gray-400
              hover:text-accent dark:hover:text-accent/80
              transform transition
              hover:-translate-y-0.5 hover:scale-105
            "
          >
            <GitHubIcon />
          </a>

          <a
            href="https://linkedin.com/in/elliecoelho"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn"
            className="
              text-gray-500 dark:text-gray-400
              hover:text-accent dark:hover:text-accent/80
              transform transition
              hover:-translate-y-0.5 hover:scale-105
            "
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
