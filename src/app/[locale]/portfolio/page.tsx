import { Navbar } from "@/components/sections/Navbar";
import { HeaderPortfolio } from "./components/HeaderPortfolio";
import { LatestProjectsPortfolio } from "./components/LatestPortfolio";
import { ServicesPortfolio } from "./components/ServicesPortfolio";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Footer } from "@/components/sections/Footer";
import { TestimonialsPortfolio } from "./components/TestimonialsPortfolio";
import { unstable_setRequestLocale } from "next-intl/server";

// Define the type for params
interface Params {
  params: {
    locale: string;
  }
}

export default async function Home({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);
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