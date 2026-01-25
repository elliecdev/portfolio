import { projects } from "@/data/projects";
import Card from "./Card";

export default function ProjectsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <Card key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}
