import './index.css'
import { Navbar } from "@/components/sections/Navbar";
import { ContactHeader } from './components/HeaderContact';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContacInfo';
import { FooterCTA } from '@/components/sections/FooterCTA';
import { Footer } from '@/components/sections/Footer';
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
      <ContactHeader />
      <main >
        <ContactForm />  
        <ContactInfo />
      </main>
      <FooterCTA className='mb-20' />
      <Footer />
    </TranslationsProvider>
  );
}