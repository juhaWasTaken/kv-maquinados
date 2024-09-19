import { Navbar } from "@/components/sections/Navbar";
import { HeaderPortfolio } from "./components/HeaderPortfolio";
import { LatestProjectsPortfolio } from "./components/LatestPortfolio";
import { ServicesPortfolio } from "./components/ServicesPortfolio";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Footer } from "@/components/sections/Footer";
import { TestimonialsPortfolio } from "./components/TestimonialsPortfolio";

export default async function Home() {
  return (
    <>
      <Navbar />
      <HeaderPortfolio />
      <main>
        <LatestProjectsPortfolio className="mb-20" />
        <ServicesPortfolio className="mb-14" />
        <TestimonialsPortfolio className="mb-14" />
      </main>
      <FooterCTA className="mb-20 " />
      <Footer />
    </>
  );
}