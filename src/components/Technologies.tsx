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
  "CI/CD",
  "Microservices",
  "Agile",
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
