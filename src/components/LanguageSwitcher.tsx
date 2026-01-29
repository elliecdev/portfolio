"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, Locale } from "@/i18n/config";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const getCurrentLocale = (): Locale => {
    const segments = pathname.split("/").filter(Boolean);
    return (segments[0] as Locale) || "en";
  };

  const getLocalizedPath = (newLocale: Locale): string => {
    const currentLocale = getCurrentLocale();
    if (pathname === `/${currentLocale}`) {
      return `/${newLocale}`;
    }
    return pathname.replace(`/${currentLocale}`, `/${newLocale}`);
  };

  const currentLocale = getCurrentLocale();

  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={getLocalizedPath(locale)}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            currentLocale === locale
              ? "bg-accent text-white dark:bg-accent/80"
              : "text-gray-700 dark:text-gray-300 hover:text-accent"
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
