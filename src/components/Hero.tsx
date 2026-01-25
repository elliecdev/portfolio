"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      className="relative px-6 overflow-hidden text-white rounded-2xl bg-gradient-to-r from-accent to-accent/70 py-14 md:px-12 md:py-15"
    >
      {/* Content */}
      <div className="relative z-10 max-w-3xl space-y-4">
        <h1 className="text-xl font-semibold leading-tight md:text-4xl">
          Software Engineering Leader
        </h1>

        <p className="text-lg text-white/90 md:text-xl">
          Technical Expertise, Leadership, Mentorship & Delivery
          {/* Building scalable, cloud-native platforms with strong teams,
          pragmatic architecture, and modern engineering practices. */}
        </p>
      </div>

      {/* Floating tech icons */}
      <TechIcon
        src="/assets/react.svg"
        alt="React"
        className="w-8 top-6 right-8 md:w-10"
        delay="delay-100"
        visible={visible}
      />

      <TechIcon
        src="/assets/python.svg"
        alt="Python"
        className="w-8 top-20 right-32 md:w-10"
        delay="delay-200"
        visible={visible}
      />

      <TechIcon
        src="/assets/php.svg"
        alt="PHP"
        className="w-10 top-36 right-14 md:w-12"
        delay="delay-300"
        visible={visible}
      />

      <TechIcon
        src="/assets/aws.svg"
        alt="AWS"
        className="w-10 top-22 right-40 md:w-12"
        delay="delay-500"
        visible={visible}
      />

      <TechIcon
        src="/assets/postgres.svg"
        alt="PostgreSQL"
        className="top-20 right-10 w-9 md:w-11"
        delay="delay-700"
        visible={visible}
        />
    </section>
  );
}

function TechIcon({
  src,
  alt,
  className,
  delay,
  visible,
}: {
  src: string;
  alt: string;
  className: string;
  delay: string;
  visible: boolean;
}) {
  return (
    <div
      className={`
        absolute
        transition-all duration-700 ease-out
        ${delay}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
        ${className}
      `}
    >
      <Image
        src={src}
        alt={alt}
        width={48}
        height={48}
        className={`
          transition-all duration-300
          opacity-50 grayscale
          hover:opacity-100 hover:grayscale-0

          /* Dark mode: slightly lighter gray, distinct from hero text */
          dark:opacity-40
          dark:grayscale dark:brightness-90
          dark:hover:opacity-100 dark:hover:grayscale-0 dark:hover:brightness-110
        `}
      />
    </div>
  );
}

