import { projectsEn } from "@/data/projects.en";
import { projectsFr } from "@/data/projects.fr";
import Card from "./Card";
import { Locale } from "@/i18n/config";

interface ProjectsGridProps {
  locale: Locale;
}

export default function ProjectsGrid({ locale }: ProjectsGridProps) {
  const projects = locale === "fr" ? projectsFr : projectsEn;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <Card key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}
