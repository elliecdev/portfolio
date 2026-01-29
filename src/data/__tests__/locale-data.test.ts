import { describe, it, expect } from "vitest";
import { experienceEn } from "@/data/experience.en";
import { experienceFr } from "@/data/experience.fr";
import { projectsEn } from "@/data/projects.en";
import { projectsFr } from "@/data/projects.fr";

describe("Experience Data", () => {
  describe("English Experience Data", () => {
    it("should have correct number of experience items", () => {
      expect(experienceEn.length).toBe(5);
    });

    it("should have all required fields in each experience item", () => {
      experienceEn.forEach((item) => {
        expect(item).toHaveProperty("role");
        expect(item).toHaveProperty("company");
        expect(item).toHaveProperty("period");
        expect(item).toHaveProperty("description");
        expect(item).toHaveProperty("tech");
      });
    });

    it("should have non-empty descriptions and tech arrays", () => {
      experienceEn.forEach((item) => {
        expect(item.description.length).toBeGreaterThan(0);
        expect(item.tech.length).toBeGreaterThan(0);
      });
    });

    it("should have English role titles", () => {
      const roles = experienceEn.map((item) => item.role);
      expect(roles[0]).toContain("Associate Director");
      expect(roles[1]).toContain("Senior Technical Project Manager");
      expect(roles[4]).toContain("Senior Application Developer");
    });
  });

  describe("French Experience Data", () => {
    it("should have correct number of experience items", () => {
      expect(experienceFr.length).toBe(5);
    });

    it("should have all required fields in each experience item", () => {
      experienceFr.forEach((item) => {
        expect(item).toHaveProperty("role");
        expect(item).toHaveProperty("company");
        expect(item).toHaveProperty("period");
        expect(item).toHaveProperty("description");
        expect(item).toHaveProperty("tech");
      });
    });

    it("should have non-empty descriptions and tech arrays", () => {
      experienceFr.forEach((item) => {
        expect(item.description.length).toBeGreaterThan(0);
        expect(item.tech.length).toBeGreaterThan(0);
      });
    });

    it("should have French role titles", () => {
      const roles = experienceFr.map((item) => item.role);
      expect(roles[0]).toContain("Directrice");
      expect(roles[1]).toContain("Gestionnaire");
      expect(roles[4]).toContain("Développeuse");
    });
  });

  describe("Experience Data Consistency", () => {
    it("should have same number of items in English and French", () => {
      expect(experienceEn.length).toBe(experienceFr.length);
    });

    it("should have same role translations for each position", () => {
      // Just check that both have role, company, period info
      experienceEn.forEach((enItem, index) => {
        const frItem = experienceFr[index];
        expect(frItem.role).toBeDefined();
        // French role should be different (translated)
        expect(frItem.role).not.toBe(enItem.role);
      });
    });

    it("should have same description length in both languages", () => {
      experienceEn.forEach((enItem, index) => {
        expect(experienceFr[index].description.length).toBe(
          enItem.description.length,
        );
      });
    });

    it("should have same tech stacks in both languages", () => {
      experienceEn.forEach((enItem, index) => {
        expect(experienceFr[index].tech).toEqual(enItem.tech);
      });
    });
  });
});

describe("Projects Data", () => {
  describe("English Projects Data", () => {
    it("should have correct number of projects", () => {
      expect(projectsEn.length).toBe(3);
    });

    it("should have all required fields in each project", () => {
      projectsEn.forEach((project) => {
        expect(project).toHaveProperty("title");
        expect(project).toHaveProperty("description");
        expect(project).toHaveProperty("tech");
      });
    });

    it("should have non-empty tech array", () => {
      projectsEn.forEach((project) => {
        expect(project.tech.length).toBeGreaterThan(0);
      });
    });

    it("should have English project titles", () => {
      const titles = projectsEn.map((p) => p.title);
      expect(titles).toContain("Portfolio Website");
      expect(titles).toContain("Step Challenges");
      expect(titles).toContain("Book Club");
    });
  });

  describe("French Projects Data", () => {
    it("should have correct number of projects", () => {
      expect(projectsFr.length).toBe(3);
    });

    it("should have all required fields in each project", () => {
      projectsFr.forEach((project) => {
        expect(project).toHaveProperty("title");
        expect(project).toHaveProperty("description");
        expect(project).toHaveProperty("tech");
      });
    });

    it("should have non-empty tech array", () => {
      projectsFr.forEach((project) => {
        expect(project.tech.length).toBeGreaterThan(0);
      });
    });

    it("should have French project titles", () => {
      const titles = projectsFr.map((p) => p.title);
      expect(titles).toContain("Site Portfolio");
      expect(titles).toContain("Step Challenges");
      expect(titles).toContain("Club de lecture");
    });
  });

  describe("Projects Data Consistency", () => {
    it("should have same number of projects in English and French", () => {
      expect(projectsEn.length).toBe(projectsFr.length);
    });

    it("should have same tech stacks in both languages", () => {
      projectsEn.forEach((enProject, index) => {
        expect(enProject.tech).toEqual(projectsFr[index].tech);
      });
    });

    it("should have same or equivalent links in both languages", () => {
      projectsEn.forEach((enProject, index) => {
        if (enProject.link) {
          expect(projectsFr[index].link).toBe(enProject.link);
        }
      });
    });
  });
});
