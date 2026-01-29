import Badge from "@/components/Badge";
import Section from "@/components/Section";

const technologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Django",
  "PHP",
  "Laravel",
  "PostgreSQL",
  "MySQL",
  "AWS",
  "REST",
  "CI/CD",
  "Microservices",
  "Agile",
  "Git",
  "GitHub Actions",
  "SonarQube",
  "New Relic",
];

export default function Technologies() {
  return (
    <Section title="Technologies">
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, i) => (
          <Badge key={tech} label={tech} index={i} />
        ))}
      </div>
    </Section>
  );
}
