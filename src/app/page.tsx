import Section from "../components/Section";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      
      {/* About Me */}
      <Section title="About Me">
        <p>
          I’m a software engineering leader with 20+ years of experience building
          scalable web applications and cloud platforms. I combine deep technical
          expertise with leadership, mentoring high-performing teams, and delivering
          impactful solutions in enterprise and regulated environments.
        </p>
        <br />
        <p>
          My expertise spans React, Next.js, TypeScript, Python, PHP, PostgreSQL, MySQL and
          cloud-native architectures on AWS. I enjoy designing maintainable systems
          that solve real-world problems efficiently.
        </p>
      </Section>

      {/* Core Competencies */}
      <Section title="Core Competencies">
        <ul className="pl-5 space-y-1 list-disc">
          <li>Full-Stack Web Development & Scalable Architecture</li>
          <li>Cloud Infrastructure & Microservices (AWS)</li>
          <li>CI/CD, DevOps Automation & Observability</li>
          <li>Technical Leadership & Team Mentorship</li>
          <li>Agile Delivery, Roadmapping & Stakeholder Alignment</li>
          <li>AI-assisted Development & Emerging Technologies</li>
        </ul>
      </Section>

      {/* Career Highlights */}
      {/* <Section title="Career Highlights">
        <ul className="pl-5 space-y-2 list-disc">
          <li>
            Led migration of legacy PHP platforms to 15+ TypeScript AWS microservices,
            improving scalability and accelerating release cycles by 50%.
          </li>
          <li>
            Directed multiple distributed cross-functional teams of engineers and managers,
            fostering collaboration, career growth, and high productivity.
          </li>
          <li>
            Implemented AI-assisted development, observability tools, and security
            enhancements to improve release stability, compliance, and performance.
          </li>
        </ul>
      </Section> */}

      {/* What I Do */}
      <Section title="What I Do">
        <ul className="pl-5 space-y-2 list-disc">
          <li>Design and implement modern, high-performance web applications</li>
          <li>Lead and mentor engineering teams for scalable, maintainable delivery</li>
          <li>Bridge product, business, and technical strategies for impactful results</li>
        </ul>
      </Section>
    </div>
  );
}
