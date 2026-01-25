"use client";

import { useEffect, useRef, useState } from "react";
import Badge from "./Badge";
import { ExperienceItem } from "@/data/experience";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const node = ref.current; // capture current ref safely
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  // Subtle slide-in (reduced distance for mobile finesse)
  const slideClass = visible
    ? "translate-x-0 opacity-100"
    : index % 2 === 0
    ? "-translate-x-4 opacity-0"
    : "translate-x-4 opacity-0";

  return (
    <div
        ref={ref}
        className={`
            relative px-4 pl-6 pb-8
            md:px-6 md:pl-8 md:pb-12
            transition-all duration-700 ease-out
            ${slideClass}

            md:rounded-lg
            md:hover:bg-gray-50 dark:md:hover:bg-white/5
            md:hover:-translate-y-[2px]
        `}
    >

      {/* Timeline dot */}
      <span
        className="
          absolute top-2 left-[-6px]
          h-2 w-2 md:h-3 md:w-3
          rounded-full bg-accent
        "
      />

      <h3 className="text-base font-semibold md:text-lg">
        {item.role}
        <span className="text-accent"> @ {item.company}</span>
      </h3>

      <p className="mt-1 text-xs text-gray-500 md:text-sm dark:text-gray-400">
        {item.period}
      </p>

      <ul className="mt-3 space-y-1 text-gray-600 md:mt-4 md:space-y-2 dark:text-gray-300">
        {item.description.map((line, i) => (
          <li key={i} className="text-sm leading-relaxed md:text-base">
            • {line}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
        {item.tech.map((tech, i) => (
          <Badge key={tech} label={tech} index={i} />
        ))}
      </div>
    </div>
  );
}
