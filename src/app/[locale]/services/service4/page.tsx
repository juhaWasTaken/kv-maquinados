import { Navbar } from "@/components/sections/Navbar";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl"
import { Rajdhani } from "next/font/google";
import { ServicesPortfolio } from "../../portfolio/components/ServicesPortfolio";
import { ChooseAbout } from "../../about-us/components/chooseAbout";
import { TestimonialsPortfolio } from "../../portfolio/components/TestimonialsPortfolio";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Footer } from "@/components/sections/Footer";
import ZoomableImage from "../components/zoomable-image";
import aboutHeader from "@/assets/images/aboutHeader.webp";
import { Plus } from "lucide-react";
import parallaxContact from "@/assets/images/servicesHeader.webp";
import image3 from "@/assets/images/image3.webp";
import Image from "next/image";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export default function Service4() {
  const t = useTranslations('services')
  return (
    <>
      <Navbar />
      <section className="relative h-[620px] md:h-[552px]">
        {/* Background Image */}
        <Image
          src={image3}
          alt="Header Background"
          layout="fill"
          objectFit="cover"
          loading="eager"
          className="z-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex items-center max-w-[1280px] h-full mx-auto">
          <div className="text-white max-w-[652px] m-5">
            <p className={`text-[1.375rem] md:text-[1.563rem] lg:text-[1.75rem] text-[#ff9302] uppercase tracking-wider mb-4 ${rajdhani.className}`}>
              {t('slogan')}
            </p>
            <h1 className={`text-[2.313rem] md:text-[2.938rem] lg:text-[3.625rem] font-bold leading-tight mb-6 text-balance ${rajdhani.className}`}>
              {t('service-4.title')}
            </h1>
            <p className="text-sm md:text-[0.938rem] lg:text-base mb-8 text-balance">
              {t('text')}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f5] pt-20">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 max-w-[1280px] mx-auto pb-20 px-4 md:px-5 lg:px-4">
          <main className="lg:w-[68%] bg-white p-6 md:p-9 lg:p-12">
            <h3 className={`${rajdhani.className} text-[1.375rem] md:text-[1.563rem] lg:text-[1.75rem] text-[#13213C] mb-5`}>Description</h3>
            <p className="text-sm md:text-[0.938rem] lg:text-base text-[#535353] mb-4">{t('service-4.text-1')}</p>
            <p className="text-sm md:text-[0.938rem] lg:text-base text-[#535353] mb-5">{t('service-4.text-2')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
              <ZoomableImage src={aboutHeader} alt="Image of the service" className="w-[50%] h-[300px] object-cover" loading="eager" />
              <ZoomableImage src={aboutHeader} alt="Image of the service" className="w-[50%] h-[300px] object-cover" loading="eager" />
              <ZoomableImage src={aboutHeader} alt="Image of the service" className="w-[50%] h-[300px] object-cover" loading="eager" />
            </div>
            <h2 className={`${rajdhani.className} text-[1.188rem] md:text-[1.313rem] lg:text-[1.438rem] text-[#13213C] mb-5`}>Include & Exclude Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul>
                  <li className="text-sm md:text-[0.938rem] lg:text-base mb-3 flex items-center" >
                    <Plus size={20} color="#ff9302" className="mr-2" strokeWidth="3" />
                    {t('service-4.includes.item-1')}
                  </li>
                  <li className="text-sm md:text-[0.938rem] lg:text-base mb-3 flex items-center" >
                    <Plus size={20} color="#ff9302" className="mr-2" strokeWidth="3" />
                    {t('service-4.includes.item-2')}
                  </li>
                  <li className="text-sm md:text-[0.938rem] lg:text-base mb-3 flex items-center" >
                    <Plus size={20} color="#ff9302" className="mr-2" strokeWidth="3" />
                    {t('service-4.includes.item-3')}
                  </li>
                  <li className="text-sm md:text-[0.938rem] lg:text-base mb-3 flex items-center" >
                    <Plus size={20} color="#ff9302" className="mr-2" strokeWidth="3" />
                    {t('service-4.includes.item-4')}
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="text-sm md:text-[0.938rem] lg:text-base mb-3 flex items-center" >
                    <Plus size={20} color="#ff9302" className="mr-2" strokeWidth="3" />
                    {t('service-4.includes.item-5')}
                  </li>
                  <li className="text-sm md:text-[0.938rem] lg:text-base mb-3 flex items-center" >
                    <Plus size={20} color="#ff9302" className="mr-2" strokeWidth="3" />
                    {t('service-4.includes.item-6')}
                  </li>
                  <li className="text-sm md:text-[0.938rem] lg:text-base mb-3 flex items-center" >
                    <Plus size={20} color="#ff9302" className="mr-2" strokeWidth="3" />
                    {t('service-4.includes.item-7')}
                  </li>
                  <li className="text-sm md:text-[0.938rem] lg:text-base mb-3 flex items-center" >
                    <Plus size={20} color="#ff9302" className="mr-2" strokeWidth="3" />
                    {t('service-4.includes.item-8')}
                  </li>
                </ul>
              </div>
            </div>
          </main>
          <aside className="flex flex-col gap-8 lg:w-[31.66%]">
            <section className="p-8 h-fit bg-white">
              <h2 className={`${rajdhani.className} text-[#13213C] text-[1.375rem] md:text-[1.563rem] lg:text-[1.75rem] mb-3`}>Related Services</h2>
              <p className="text-sm md:text-[0.938rem] lg:text-base text-[#535353] mb-4">Convallis suspendisse rhoncus scelerisque eu penatibus consequat feugiat.</p>
              <ul className="grid md:grid-cols-2 gap-2">
                <li className="mb-2">
                  <Link className="text-sm md:text-[0.938rem] lg:text-base text-[#535353] hover:text-[#ff9302]" href="/services/service1">Service 1</Link>
                </li>

                <li className="mb-2">
                  <Link className="text-sm md:text-[0.938rem] lg:text-base text-[#535353] hover:text-[#ff9302]" href="/services/service2">Service 2</Link>
                </li>

                <li className="mb-2">
                  <Link className="text-sm md:text-[0.938rem] lg:text-base text-[#535353] hover:text-[#ff9302]" href="/services/service3">Service 3</Link>
                </li>

                <li className="mb-2">
                  <Link className="text-sm md:text-[0.938rem] lg:text-base text-[#535353] hover:text-[#ff9302]" href="/services/service5">Service 5</Link>
                </li>

                <li className="mb-2">
                  <Link className="text-sm md:text-[0.938rem] lg:text-base text-[#535353] hover:text-[#ff9302]" href="/services/service6">Service 6</Link>
                </li>

              </ul>
            </section>
            <section className="relative p-8 w-full h-fit lg:w-full lg:h-[232px]">
              {/* Background Image */}
              <Image
                src={parallaxContact} // Update with your image path
                alt="Contact Us Background"
                layout="fill"
                objectFit="cover"
                loading="lazy"
                className="z-0" // Ensure the image is behind other content
                priority={false} // Adjust this if needed
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

              {/* Content */}
              <div className="relative z-20 flex flex-col">
                <h2 className={`${rajdhani.className} text-white text-[1.375rem] md:text-[1.563rem] lg:text-[1.75rem] mb-4`}>
                  Contact Us
                </h2>
                <p className="text-sm md:text-[0.938rem] lg:text-base text-white mb-3">
                  Let&apos;s start working together and start creating all your works reality.
                </p>
                <Link
                  className={`${rajdhani.className} text-base md:text-lg lg:text-[1.188rem] bg-[#ff9302] px-6 py-3 text-center text-white hover:bg-[#13213C] hover:text-[#ff9302] transition-all`}
                  href="/contact"
                >
                  Contact Us
                </Link>
              </div>
            </section>
          </aside>
        </div>
      </section>
      <ServicesPortfolio className='mb-20' />
      <ChooseAbout className='mb-4 px-4' />
      <TestimonialsPortfolio />
      <FooterCTA className='mb-20 mt-20' />
      <Footer />
    </>
  )
}