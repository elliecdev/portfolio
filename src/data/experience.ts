// data/experience.ts
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Associate Director, App Dev & DevOps",
    company: "PSL Group | Montreal, QC (Remote)",
    period: "Apr 2021 – Nov 2024",
    description: [
      "Led multiple cross-functional distributed engineering teams delivering cloud-native platforms.",
      "Migrated monolith to 15+ AWS microservices, improving scalability and release speed.",
      "Introduced AI-assisted development and observability tools, cutting errors and boosting efficiency.",
    ],
    tech: ["TypeScript", "AWS", "Python", "Django", "CI/CD", "Microservices"],
  },
  {
    role: "Senior Technical Project Manager",
    company: "PSL Group | Montreal, QC (Remote)",
    period: "Apr 2018 – Apr 2021",
    description: [
      "Managed cross-functional teams delivering PHP, TypeScript, and Python projects.",
      "Implemented CI/CD automation and Agile frameworks, improving delivery efficiency by 30%.",
    ],
    tech: ["PHP", "TypeScript", "Python", "Jira", "Agile", "CI/CD"],
  },
  {
    role: "Technical Project Manager",
    company: "PSL Group | Montreal, QC (Remote)",
    period: "Jun 2015 – Apr 2018",
    description: [
      "Delivered full application lifecycles and mentored engineers for high-performing teams.",
      "Streamlined project tracking and technical design processes, accelerating releases.",
    ],
    tech: ["PHP", "TypeScript", "Python", "Jira", "Scrum", "Unit Testing"],
  },
  {
    role: "Application Support / DevOps",
    company: "PSL Group | Montreal, QC (Remote)",
    period: "May 2014 – Jun 2015",
    description: [
      "Managed staging and production environments to ensure high availability and security.",
      "Oversaw releases, automated backups, and critical issue resolution to safeguard operations.",
    ],
    tech: ["LAMP", "MySQL", "Linux", "DevOps", "Monitoring", "Automation"],
  },
  {
    role: "Senior Application Developer",
    company: "PSL Group | Montreal, QC (Remote)",
    period: "Mar 2013 – May 2014",
    description: [
      "Led full-stack development of new PHP/Yii web applications, improving reporting speed by 60%.",
      "Mentored junior developers and enforced best practices to enhance team efficiency.",
    ],
    tech: ["PHP", "Yii", "MySQL", "JavaScript", "Unit Testing"],
  },
];
