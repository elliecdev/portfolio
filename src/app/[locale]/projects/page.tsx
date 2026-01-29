import Section from "@/components/Section";
import ProjectsGrid from "@/components/ProjectsGrid";
import { dictionaries } from "@/i18n";
import { Locale } from "@/i18n/config";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = dictionaries[locale];

  return (
    <Section title={dict.projects.title} subtitle={dict.projects.subtitle}>
      <ProjectsGrid locale={locale} />
    </Section>
  );
}
