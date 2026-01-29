import Section from "@/components/Section";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import { dictionaries } from "@/i18n";
import { Locale } from "@/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = dictionaries[locale];

  return (
    <div className="space-y-12">
      <Hero title={dict.hero.title} subtitle={dict.hero.subtitle} />

      {/* About Me */}
      <Section title={dict.home.aboutTitle}>
        <p>{dict.home.aboutText}</p>
      </Section>

      {/* Core Competencies */}
      <Section title={dict.home.competenciesTitle}>
        <ul className="pl-5 space-y-1 list-disc">
          {dict.home.competenciesList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Technologies />

      {/* What I Do */}
      <Section title={dict.home.doTitle}>
        <p>{dict.home.doText}</p>
      </Section>
    </div>
  );
}
