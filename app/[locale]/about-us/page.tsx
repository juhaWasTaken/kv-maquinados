import './index.css'
import { Navbar } from "@/components/sections/Navbar";
import { HeaderAbout } from './components/HeaderAbout';
import { AboutHome } from '@/components/sections/AboutHome';
import { LogoSlider } from '@/components/sections/LogosSlider';
import { ParallaxSection } from '@/components/sections/SectorHome';
import { FAQAbout } from './components/FAQAbout';
import { ChooseAbout } from './components/chooseAbout';
import { FooterCTA } from '@/components/sections/FooterCTA';
import { Footer } from '@/components/sections/Footer';
import initTranslations from "../../i18n";
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
      <HeaderAbout />
      <main >
        <AboutHome />
        <LogoSlider className="py-7" />
        <ParallaxSection className="mb-10" />
        <FAQAbout className='px-5 mb-24' />
        <ChooseAbout className='px-5 '/>
      </main>

      <FooterCTA className='mb-20 mt-20'/>
      <Footer />

    </TranslationsProvider>
  );
}