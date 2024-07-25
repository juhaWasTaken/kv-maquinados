import { Navbar } from "../../components/sections/Navbar";
import { HeaderSection } from "@/components/sections/Header";
import { LogoSlider } from "@/components/sections/LogosSlider";
import { AboutHome } from "@/components/sections/AboutHome";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ServicesHome } from "@/components/sections/ServicesHome";
import { ParallaxSection } from "@/components/sections/SectorHome";
import { LatestProjects } from "@/components/sections/LatestHome";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Footer } from "@/components/sections/Footer";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

// Define the type for params
interface Params {
  locale: string;
}

const i18nNamespaces = ["home","about", "portfolio"]

export default async function Home({ params }: { params: Params }) {
  const { locale } = params;
  const { t, resources } = await initTranslations({
    locale,
    namespaces: i18nNamespaces
  });

  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
      <Navbar />
      <HeaderSection />
      <LogoSlider className="py-7" />
      <main>
        <AboutHome className="pb-10 lg:pb-20" />
        <ContactCTA />
        <ServicesHome />
        <ParallaxSection className="mt-24 mb-20" />
        <LatestProjects />
      </main>
      <FooterCTA className="mb-20 mt-32" />
      <Footer />
    </TranslationsProvider>
  );
}
