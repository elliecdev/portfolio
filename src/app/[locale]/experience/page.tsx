import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import { dictionaries } from "@/i18n";
import { Locale } from "@/i18n/config";

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = dictionaries[locale];

  return (
    <Section title={dict.experience.title} subtitle={dict.experience.subtitle}>
      <Timeline locale={locale} />
    </Section>
  );
}
