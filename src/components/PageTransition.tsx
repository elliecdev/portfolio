"use client";

import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div
      key={pathname}
      className="
        animate-page-in
        motion-safe:transition-all
        motion-safe:duration-300
      "
    >
      {children}
    </div>
  );
}
