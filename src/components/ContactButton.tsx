"use client";

import React from "react";

interface ContactButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
}

export default function ContactButton({
  href,
  label,
  icon,
  className = "",
}: ContactButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        transform transition-all duration-200 ease-out
        active:scale-95
        flex items-center justify-center gap-2
        px-4 py-2 rounded
        hover:-translate-y-1 hover:scale-[1.03]
        ${className}
        hover:shadow-lg               /* general hover shadow */
        hover:shadow-accent/40        /* light-mode glow */
        dark:hover:shadow-none        /* no glow in dark mode */
      `}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
