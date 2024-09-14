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

// Define the type for params
interface Params {
  params: {
    locale: string;
  }
}
export default async function Home({ params: { locale } }: Params) {

  return (
    <>
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
    </>
  );
}
