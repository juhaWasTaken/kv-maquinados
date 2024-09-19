
import { Navbar } from "@/components/sections/Navbar";
import { HeaderServices } from "./components/HeaderServices";
import { ServicesHome } from "./components/ServicesPage";
import { ParallaxSection } from "@/components/sections/SectorHome";
import { ChooseAbout } from "../about-us/components/chooseAbout";
import { TestimonialsPortfolio } from "../portfolio/components/TestimonialsPortfolio";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Footer } from "@/components/sections/Footer";
import { unstable_setRequestLocale } from "next-intl/server";

// Define the type for params
interface Params {
  params: {
      locale: string
  }
}
export default async function Home({params: {locale}}: Params) {
  unstable_setRequestLocale(locale);
  return (
    <>
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
    </>
  );
}