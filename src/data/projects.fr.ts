// data/projects.fr.ts
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export const projectsFr: Project[] = [
  {
    title: "Site Portfolio",
    description:
      "Portfolio personnel conçu pour mettre en valeur mes projets et mon parcours professionnel, développé avec Next.js, TypeScript et Tailwind CSS.",
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
      "Application de type Step Challenge permettant d’organiser les participants et les équipes, ainsi que de suivre la progression à l’aide de classements.",
    tech: ["Python", "Django", "Bulma", "PostgreSQL"],
  },
  {
    title: "Club de lecture",
    description:
      "Application personnelle de club de lecture permettant de suivre, d’organiser et de planifier des lectures hebdomadaires par livre.",
    tech: ["Next.js", "Python", "Django", "REST APIs", "PostgreSQL"],
  },
];
