import './index.css'
import { Navbar } from "@/components/sections/Navbar";
import { ContactHeader } from './components/HeaderContact';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContacInfo';
import { FooterCTA } from '@/components/sections/FooterCTA';
import { Footer } from '@/components/sections/Footer';

// Define the type for params
interface Params {
  locale: string;
}

const i18nNamespaces = ["home", "about", "portfolio", "services", "contact"];

export default async function Home({ params }: { params: Params }) {

  return (
    <>
      <Navbar />
      <ContactHeader />
      <main >
        <ContactForm />  
        <ContactInfo />
      </main>
      <FooterCTA className='mb-20' />
      <Footer />
    </>
  );
}