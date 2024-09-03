import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { HeaderPortfolio } from "./components/HeaderPortfolio";
import { LatestProjectsPortfolio } from "./components/LatestPortfolio";
import { ServicesPortfolio } from "./components/ServicesPortfolio";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Footer } from "@/components/sections/Footer";
import { TestimonialsPortfolio } from "./components/TestimonialsPortfolio";
import initTranslations from "../../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import LanguageChanger from "@/components/LanguajeChanger";

// Define the type for params
interface Params {
  locale: string;
}

const i18nNamespaces = ["home", "about", "portfolio", "services", "contact"];

export default async function Home({ params }: { params: Params }) {
  const { locale } = params;
  const { resources } = await initTranslations({
    locale,
    namespaces: i18nNamespaces
  });

  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
      <Navbar />
      <HeaderPortfolio />
      <main className="">
        <LatestProjectsPortfolio className="mb-20" />
        <ServicesPortfolio className="mb-14" />
        <TestimonialsPortfolio className="mb-14" />
      </main>
      <FooterCTA className="mb-20 " />
      <Footer />
    </TranslationsProvider>
  );
}