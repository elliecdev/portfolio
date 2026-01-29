import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { locales } from "@/i18n/config";
import { Locale } from "@/i18n/config";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    // Optional: throw 404 for invalid locale
    throw new Error("Invalid locale");
  }

  const typedLocale = locale as Locale;

  return (
    <html lang={locale} className="transition-colors duration-300">
      <body className="font-sans antialiased text-gray-900 transition-colors duration-300 bg-white bg-gray-50 dark:text-gray-100 dark:bg-gray-800">
        <Header locale={typedLocale} />
        <main className="max-w-5xl px-6 py-16 mx-auto">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer locale={typedLocale} />
      </body>
    </html>
  );
}
