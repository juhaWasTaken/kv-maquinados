import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import initTranslations from "../../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import LanguageChanger from "@/components/LanguajeChanger";

// Define the type for params
interface Params {
  locale: string;
}

const i18nNamespaces = ["home", "common"]

export default async function Home({ params }: { params: Params }) {
  const { locale } = params;
  const { t, resources } = await initTranslations({
    locale,
    namespaces: i18nNamespaces
  });

  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
      <Navbar />
      <main className="">
        <h1>{t('common:services')}</h1>
        
      </main>
    </TranslationsProvider>
  );
}