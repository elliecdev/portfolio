"use client";

import { useEffect, useRef, useState } from "react";
import TimelineItem from "./TimelineItem";
import { experienceEn } from "@/data/experience.en";
import { experienceFr } from "@/data/experience.fr";
import { Locale } from "@/i18n/config";

interface TimelineProps {
  locale: Locale;
}

export default function Timeline({ locale }: TimelineProps) {
  const experience = locale === "fr" ? experienceFr : experienceEn;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );

    observer.observe(node);

    return () => observer.unobserve(node);
  }, []);

  return (
    <div ref={ref} className="relative mt-12">
      {/* Vertical timeline line */}
      <span
        aria-hidden
        className={`
            absolute left-[-1px] top-0 bottom-0
            w-px bg-accent/40
            origin-top
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}
        `}
      />

      <div className="space-y-2 md:space-y-4">
        {experience.map((item, index) => (
          <TimelineItem key={item.company + index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
