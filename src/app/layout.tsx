import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Software Engineering Leader",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
