import './index.css'
import { Navbar } from "@/components/sections/Navbar";
import { ContactHeader } from './components/HeaderContact';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContacInfo';
import { FooterCTA } from '@/components/sections/FooterCTA';
import { Footer } from '@/components/sections/Footer';

export default  function Home() {
  
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