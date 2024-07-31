
import { Navbar } from "@/components/sections/Navbar";
import { HeaderServices } from "./components/HeaderServices";
import { ServicesHome } from "./components/ServicesPage";
import { ParallaxSection } from "@/components/sections/SectorHome";
import { ChooseAbout } from "../about-us/components/chooseAbout";
import { TestimonialsPortfolio } from "../portfolio/components/TestimonialsPortfolio";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Footer } from "@/components/sections/Footer";
import initTranslations from "../../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";


// Define the type for params
interface Params {
  locale: string;
}

const i18nNamespaces = ["home", "about", "portfolio", "services", "contact"];

export default async function Home({ params }: { params: Params }) {
  const { locale } = params;
  const { t, resources } = await initTranslations({
    locale,
    namespaces: i18nNamespaces
  });

  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
      <Navbar />
      <HeaderServices />
      <main className="">
        <ServicesHome />
        <ParallaxSection className="my-14" />
        <ChooseAbout className="my-16 px-5" />
        <TestimonialsPortfolio className="my-16" />
      </main>
      <FooterCTA className='mb-20 mt-20'/>
      <Footer />
    </TranslationsProvider>
  );
}