import { navEn } from "@/data/nav.en";
import { navFr } from "@/data/nav.fr";
import { heroEn } from "@/data/hero.en";
import { heroFr } from "@/data/hero.fr";
import { homeEn } from "@/data/home.en";
import { homeFr } from "@/data/home.fr";
import { contactEn } from "@/data/contact.en";
import { contactFr } from "@/data/contact.fr";
import { footerEn } from "@/data/footer.en";
import { footerFr } from "@/data/footer.fr";
import { experienceDictEn } from "@/data/experience.dict.en";
import { experienceDictFr } from "@/data/experience.dict.fr";
import { projectsDictEn } from "@/data/projects.dict.en";
import { projectsDictFr } from "@/data/projects.dict.fr";

const enDict = {
  nav: navEn,
  hero: heroEn,
  home: homeEn,
  experience: experienceDictEn,
  projects: projectsDictEn,
  contact: contactEn,
  footer: footerEn,
};

const frDict = {
  nav: navFr,
  hero: heroFr,
  home: homeFr,
  experience: experienceDictFr,
  projects: projectsDictFr,
  contact: contactFr,
  footer: footerFr,
};

export const dictionaries = { en: enDict, fr: frDict };
