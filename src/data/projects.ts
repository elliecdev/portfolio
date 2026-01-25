export interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase projects and professional experience, built with Next.js, TypeScript, and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    link: "https://ellie.dev",
  },
  {
    title: "Step Challenges",
    description:
      "Step Challenge app to organize participants, teams and track progress through leaderboards.",
    tech: ["Python", "Django", "Bulma","PostgreSQL"],
  },
  {
    title: "Book Club",
    description:
      "Personal Book Club app to track, organize and schedule weekly reading plans per book.",
    tech: ["Next.js", "Python", "Django", "PostgreSQL"],
  },
]
