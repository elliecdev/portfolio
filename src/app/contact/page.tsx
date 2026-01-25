"use client";

import { useEffect, useRef, useState } from "react";
import ContactButton from "@/components/ContactButton";
import { EnvelopeIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const node = sectionRef.current; // 👈 copy current value
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node); // 👈 safe reference
    };
  }, []);

  const sectionAnimation = visible
    ? "translate-y-0 opacity-100 transition-all duration-700 ease-out"
    : "translate-y-6 opacity-0";

  const buttons = [
    // {
    //   label: "Email Me",
    //   href: "mailto:test@example.com",
    //   style: "bg-accent text-white hover:bg-accent/90",
    //   icon: <EnvelopeIcon />,
    // },
    {
      label: "GitHub",
      href: "https://github.com/elliecdev",
      style:
        "bg-accent text-white hover:bg-accent/90 dark:bg-accent dark:text-gray-200 dark:hover:bg-accent/80",
      icon: <GitHubIcon />,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/elliecoelho",
      style:
        "bg-accent text-white hover:bg-accent/90 dark:bg-accent dark:text-gray-200 dark:hover:bg-accent/80",
      icon: <LinkedInIcon />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`mx-auto max-w-3xl px-6 py-16 text-center ${sectionAnimation}`}
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        Get in Touch
      </h1>

      <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
        I’m always open to new opportunities, collaborations, or just a friendly
        chat.
      </p>

      <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row">
        {buttons.map((btn, index) => {
          const delay = index * 150;
          return (
            <div
              key={btn.label}
              className={
                visible
                  ? `opacity-100 translate-y-0 delay-[${delay}ms]`
                  : "opacity-0 translate-y-6"
              }
            >
              <ContactButton
                href={btn.href}
                label={btn.label}
                icon={btn.icon}
                className={btn.style}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
