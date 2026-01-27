import Section from "../components/Section";
import Hero from "../components/Hero";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />

      {/* About Me */}
      <Section title="About Me">
        <p>
          I’m a software engineering leader with 20+ years of experience
          building scalable web applications and cloud platforms. I combine deep
          technical expertise with leadership, mentoring high-performing teams
          and delivering impactful solutions where reliability, security, and
          scale matter.
        </p>
      </Section>

      {/* Core Competencies */}
      <Section title="Core Competencies">
        <ul className="pl-5 space-y-1 list-disc">
          <li>Full-Stack Web Development & Scalable Architecture</li>
          <li>Cloud-native Systems & Microservices (AWS)</li>
          <li>Technical Leadership, Mentorship & Delivery</li>
          <li>CI/CD, DevOps Automation & Observability</li>
          <li>Agile Delivery, Roadmapping & Stakeholder Alignment</li>
        </ul>
      </Section>

      <Technologies />

      {/* What I Do */}
      <Section title="What I Do">
        <p>
          I guide the design and delivery of modern web platforms, lead and
          mentor engineering teams, and help organizations turn complex
          technical challenges into reliable, scalable solutions.
        </p>
      </Section>
    </div>
  );
}
