"use client";

import { useEffect, useRef, useState } from "react";

interface BadgeProps {
  label: string;
  index: number;
}

export default function Badge({ label, index }: BadgeProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const node = ref.current; // capture the current ref
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node); // use the captured node
    };
  }, []);

  const animationClass = visible
    ? `translate-y-0 opacity-100 transition-all duration-500 delay-[${index * 100 + 300}ms] ease-out`
    : "translate-y-2 opacity-0";

  return (
    <span
      ref={ref}
      className={`
        inline-block
        bg-gray-200 dark:bg-gray-700  /* light mode stays consistent */
        text-gray-800 dark:text-gray-200
        text-xs font-medium px-2 py-1 rounded
        ${animationClass}
      `}
    >
      {label}
    </span>
  );
}
