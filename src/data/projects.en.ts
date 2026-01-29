// data/projects.en.ts
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export const projectsEn: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase projects and professional experience, built with Next.js, TypeScript, and Tailwind CSS.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vitest",
      "GitHub Actions",
      "Vercel",
    ],
    link: "https://www.elliecoelho.com",
  },
  {
    title: "Step Challenges",
    description:
      "Step Challenge app to organize participants, teams and track progress through leaderboards.",
    tech: ["Python", "Django", "Bulma", "PostgreSQL"],
  },
  {
    title: "Book Club",
    description:
      "Personal Book Club app to track, organize and schedule weekly reading plans per book.",
    tech: ["Next.js", "Python", "Django", "REST APIs", "PostgreSQL"],
  },
];
