// data/experience.fr.ts
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}

export const experienceFr: ExperienceItem[] = [
  {
    role: "Directrice associée, Développement d’applications et DevOps",
    company: "PSL Group | Montreal, QC (Télétravail)",
    period: "Avr 2021 – Nov 2024",
    description: [
      "Dirigé plusieurs équipes d’ingénierie distribuées et interfonctionnelles livrant des plateformes cloud natives.",
      "Guidé la migration d’un monolithe vers plus de 15 microservices sur AWS, améliorant la scalabilité et la vitesse de livraison.",
      "Amélioré la qualité des livraisons en introduisant des pratiques de développement assistées par l’IA et des outils d’observabilité.",
      "Collaboré avec les parties prenantes afin d’aligner les priorités et de traduire les objectifs d’affaires en feuilles de route techniques claires.",
    ],
    tech: [
      "TypeScript",
      "Angular",
      "React",
      "AWS",
      "Python",
      "Django",
      "CI/CD",
      "Microservices",
    ],
  },
  {
    role: "Gestionnaire de projets techniques senior",
    company: "PSL Group | Montreal, QC (Télétravail)",
    period: "Avr 2018 – Avr 2021",
    description: [
      "Géré des équipes distribuées et interfonctionnelles livrant des projets en PHP, TypeScript et Python.",
      "Implanté l’automatisation CI/CD et des cadres Agile, améliorant l’efficacité de livraison de 30 %.",
      "Piloté la livraison de bout en bout en facilitant les échanges techniques et en alignant les solutions aux objectifs d’affaires.",
    ],
    tech: ["PHP", "TypeScript", "Python", "Jira", "Agile", "CI/CD"],
  },
  {
    role: "Gestionnaire de projets techniques",
    company: "PSL Group | Montreal, QC (Télétravail)",
    period: "Juin 2015 – Avr 2018",
    description: [
      "Livré des cycles de vie applicatifs complets et mentoré les ingénieurs afin de bâtir des équipes performantes.",
      "Rationalisé le suivi des projets et les processus de conception technique, accélérant les mises en production.",
    ],
    tech: ["PHP", "TypeScript", "Python", "Jira", "Scrum", "Unit Testing"],
  },
  {
    role: "Support des applications / DevOps",
    company: "PSL Group | Montreal, QC (Télétravail)",
    period: "Mai 2014 – Juin 2015",
    description: [
      "Géré les environnements de staging et production afin d'assurer une haute disponibilité et sécurité.",
      "Supervisé les déploiements, les sauvegardes automatisées et la résolution d’incidents critiques pour assurer la continuité des opérations.",
    ],
    tech: ["LAMP", "MySQL", "Linux", "DevOps", "Monitoring", "Automation"],
  },
  {
    role: "Développeur d'applications senior",
    company: "PSL Group | Montreal, QC (Télétravail)",
    period: "Mars 2013 – Mai 2014",
    description: [
      "Dirigé le développement full-stack de nouvelles applications web en PHP/Yii, améliorant la rapidité des rapports de 60 %.",
      "Mentoré les développeurs juniors et appliqué les meilleures pratiques afin d’améliorer l’efficacité de l’équipe.",
    ],
    tech: ["PHP", "Yii", "MySQL", "JavaScript", "Unit Testing"],
  },
];
