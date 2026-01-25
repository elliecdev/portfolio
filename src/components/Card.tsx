"use client";

import { Project } from "@/data/projects";
import { useEffect, useRef, useState } from "react";
import Badge from "./Badge";

interface CardProps {
  project: Project;
  index: number;
}

export default function Card({ project, index }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
        const current = ref.current; // store the current ref
        if (!current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );

        observer.observe(current);

        return () => {
            observer.unobserve(current);
        };
    }, []);


  const cardAnimation = visible
    ? `translate-y-0 opacity-100 transition-all duration-700 delay-[${index * 100}ms] ease-out`
    : "translate-y-6 opacity-0";

  const linkAnimation = visible
    ? `opacity-100 transition-opacity duration-500 delay-[${index * 100 + 500}ms]`
    : "opacity-0";

  return (
    <div
        ref={ref}
        className={`
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700
            rounded-xl p-6
            shadow-sm hover:shadow-md
            transition-all duration-500 transform
            hover:-translate-y-1 hover:scale-[1.02]

            /* subtle purple accent glow on hover */
            hover:ring-1 hover:ring-purple-400/30 dark:hover:ring-purple-500/40

            ${cardAnimation}
        `}
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {project.title}
      </h3>

      <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech, i) => (
          <Badge key={tech} label={tech} index={i} />
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 inline-block text-accent dark:text-accent/80 hover:underline transition-colors ${linkAnimation}`}
        >
          View Project →
        </a>
      )}
    </div>
  );
}
