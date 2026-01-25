"use client";

import { useEffect, useRef, useState } from "react";

interface SectionProps {
  title: string;
  subtitle?: string; // optional
  children: React.ReactNode;
}

export default function Section({ title, subtitle, children }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`my-12 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="mb-4 text-2xl font-bold text-accent">{title}</h2>

      {subtitle && (
        <h3
          className={`mb-8 text-lg font-medium leading-relaxed tracking-wide text-gray-700 dark:text-gray-300
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {subtitle}
        </h3>
      )}

      <div
        className={`transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
