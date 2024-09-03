import './index.css'
import ZoomableImage from "../components/zoomable-image";
import { Plus, Minus } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { ServicesPortfolio } from '../../portfolio/components/ServicesPortfolio';
import { ChooseAbout } from '../../about-us/components/chooseAbout';
import { TestimonialsPortfolio } from '../../portfolio/components/TestimonialsPortfolio';
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Footer } from "@/components/sections/Footer";
import { Rajdhani } from "next/font/google";
import worker from "../../../../assets/images/worker.webp";
import Link from 'next/link';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

const services = {
    services1: {
        name: "Service 1",
        description: "We are a company that offers a wide range of services to meet your needs. We look forward to work with our client and give them the best deal possible. We aim for greatness and we compromise to achieve and superpass all the challenges during our works. In KV Maquinados we guarantee quality in our work .",
        include: {
            include1: "We promise to deliver the best quality in our work.",
            include2: "We promise to deliver the best quality in our work.",
            include3: "We promise to deliver the best quality in our work.",
            include4: "We promise to deliver the best quality in our work.",
            include5: "We promise to deliver the best quality in our work.",
            include6: "We promise to deliver the best quality in our work.",
        },
        exclude: {
            exclude1: "We promise to deliver the best quality in our work.",
            exclude2: "We promise to deliver the best quality in our work.",
            exclude3: "We promise to deliver the best quality in our work.",
            exclude4: "We promise to deliver the best quality in our work.",
            exclude5: "We promise to deliver the best quality in our work.",
            exclude6: "We promise to deliver the best quality in our work.",
        },
        image: worker,
    },
    services2: {
        name: "Service 2",
        description: "We are a company that offers a wide range of services to meet your needs. We look forward to work with our client and give them the best deal possible. We aim for greatness and we compromise to achieve and superpass all the challenges during our works. In KV Maquinados we guarantee quality in our work .",
        include: {
            include1: "We promise to deliver the best quality in our work.",
            include2: "We promise to deliver the best quality in our work.",
            include3: "We promise to deliver the best quality in our work.",
            include4: "We promise to deliver the best quality in our work.",
            include5: "We promise to deliver the best quality in our work.",
            include6: "We promise to deliver the best quality in our work.",
        },
        exclude: {
            exclude1: "We promise to deliver the best quality in our work.",
            exclude2: "We promise to deliver the best quality in our work.",
            exclude3: "We promise to deliver the best quality in our work.",
            exclude4: "We promise to deliver the best quality in our work.",
            exclude5: "We promise to deliver the best quality in our work.",
            exclude6: "We promise to deliver the best quality in our work.",
        },
        image: worker,
    },
    services3: {
        name: "Service 3",
        description: "We are a company that offers a wide range of services to meet your needs. We look forward to work with our client and give them the best deal possible. We aim for greatness and we compromise to achieve and superpass all the challenges during our works. In KV Maquinados we guarantee quality in our work .",
        include: {
            include1: "We promise to deliver the best quality in our work.",
            include2: "We promise to deliver the best quality in our work.",
            include3: "We promise to deliver the best quality in our work.",
            include4: "We promise to deliver the best quality in our work.",
            include5: "We promise to deliver the best quality in our work.",
            include6: "We promise to deliver the best quality in our work.",
        },
        exclude: {
            exclude1: "We promise to deliver the best quality in our work.",
            exclude2: "We promise to deliver the best quality in our work.",
            exclude3: "We promise to deliver the best quality in our work.",
            exclude4: "We promise to deliver the best quality in our work.",
            exclude5: "We promise to deliver the best quality in our work.",
            exclude6: "We promise to deliver the best quality in our work.",
        },
        image: worker,
    },
    services4: {
        name: "Service 4",
        description: "We are a company that offers a wide range of services to meet your needs. We look forward to work with our client and give them the best deal possible. We aim for greatness and we compromise to achieve and superpass all the challenges during our works. In KV Maquinados we guarantee quality in our work .",
        include: {
            include1: "We promise to deliver the best quality in our work.",
            include2: "We promise to deliver the best quality in our work.",
            include3: "We promise to deliver the best quality in our work.",
            include4: "We promise to deliver the best quality in our work.",
            include5: "We promise to deliver the best quality in our work.",
            include6: "We promise to deliver the best quality in our work.",
        },
        exclude: {
            exclude1: "We promise to deliver the best quality in our work.",
            exclude2: "We promise to deliver the best quality in our work.",
            exclude3: "We promise to deliver the best quality in our work.",
            exclude4: "We promise to deliver the best quality in our work.",
            exclude5: "We promise to deliver the best quality in our work.",
            exclude6: "We promise to deliver the best quality in our work.",
        },
        image: worker,
    },
    services5: {
        name: "Service 5",
        description: "We are a company that offers a wide range of services to meet your needs. We look forward to work with our client and give them the best deal possible. We aim for greatness and we compromise to achieve and superpass all the challenges during our works. In KV Maquinados we guarantee quality in our work .",
        include: {
            include1: "We promise to deliver the best quality in our work.",
            include2: "We promise to deliver the best quality in our work.",
            include3: "We promise to deliver the best quality in our work.",
            include4: "We promise to deliver the best quality in our work.",
            include5: "We promise to deliver the best quality in our work.",
            include6: "We promise to deliver the best quality in our work.",
        },
        exclude: {
            exclude1: "We promise to deliver the best quality in our work.",
            exclude2: "We promise to deliver the best quality in our work.",
            exclude3: "We promise to deliver the best quality in our work.",
            exclude4: "We promise to deliver the best quality in our work.",
            exclude5: "We promise to deliver the best quality in our work.",
            exclude6: "We promise to deliver the best quality in our work.",
        },
        image: worker,
    },
    services6: {
        name: "Service 6",
        description: "We are a company that offers a wide range of services to meet your needs. We look forward to work with our client and give them the best deal possible. We aim for greatness and we compromise to achieve and superpass all the challenges during our works. In KV Maquinados we guarantee quality in our work .",
        include: {
            include1: "We promise to deliver the best quality in our work.",
            include2: "We promise to deliver the best quality in our work.",
            include3: "We promise to deliver the best quality in our work.",
            include4: "We promise to deliver the best quality in our work.",
            include5: "We promise to deliver the best quality in our work.",
            include6: "We promise to deliver the best quality in our work.",
        },
        exclude: {
            exclude1: "We promise to deliver the best quality in our work.",
            exclude2: "We promise to deliver the best quality in our work.",
            exclude3: "We promise to deliver the best quality in our work.",
            exclude4: "We promise to deliver the best quality in our work.",
            exclude5: "We promise to deliver the best quality in our work.",
            exclude6: "We promise to deliver the best quality in our work.",
        },
        image: worker,
    },
};

interface Params {
    locale: string;
    service: string;  // Added service property
}

const i18nNamespaces = ["home", "about", "portfolio", "services", "contact"];

export default async function ServiceDetail({ params }: { params: Params }) {
    const { locale } = params;
    const { t, resources } = await initTranslations({
        locale,
        namespaces: i18nNamespaces
    });
    const serviceId = params.service;

    console.log("Service parameter:", serviceId); // Debugging: Check the service parameter value

    const serviceData = services[serviceId as keyof typeof services];

    if (!serviceData) {
        console.log("Service not found:", serviceId); // Debugging: Check when service data is not found
        return <div>Service not found</div>;
    }

    return (
        <TranslationsProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
            <Navbar />
            <section className="relative h-[620px] md:h-[552px] bg-cover bg-center bg-image3Header" >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex items-center max-w-[1280px] h-full mx-auto">
                    <div className=" text-white max-w-[652px] m-5">
                        <p className={`text-[1.375rem] md:text-[1.563rem] lg:text-[1.75rem] text-[#ff9302] uppercase tracking-wider mb-4 ${rajdhani.className}`}>{t('header.slogan')}</p>
                        <h1 className={`text-[2.313rem] md:text-[2.938rem] lg:text-[3.625rem] font-bold leading-tight mb-6 text-balance ${rajdhani.className}`}>{serviceData.name}</h1>
                        <p className="text-sm md:text-[0.938rem] lg:text-base mb-8 text-balance">{t('header.text')}</p>
                    </div>
                </div>
            </section>
            <section className="bg-[#f5f5f5] pt-20">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 max-w-[1280px] mx-auto pb-20 px-4 md:px-5 lg:px-4">
                    <main className="lg:w-[68%] bg-white p-6 md:p-9 lg:p-12">
                        <h3 className={`${rajdhani.className} text-[1.375rem] md:text-[1.563rem] lg:text-[1.75rem] text-[#13213C] mb-5`}>Description</h3>
                        <p className="text-sm md:text-[0.938rem] lg:text-base text-[#535353] mb-4">{serviceData.description}</p>
                        <p className="text-sm md:text-[0.938rem] lg:text-base text-[#535353] mb-5">{serviceData.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
                            <ZoomableImage src={serviceData.image} alt={serviceData.name} className="w-[50%] h-[300px] object-cover" />
                            <ZoomableImage src={serviceData.image} alt={serviceData.name} className="w-[50%] h-[300px] object-cover" />
                            <ZoomableImage src={serviceData.image} alt={serviceData.name} className="w-[50%] h-[300px] object-cover" />
                        </div>
                        <h2 className={`${rajdhani.className} text-[1.188rem] md:text-[1.313rem] lg:text-[1.438rem] text-[#13213C] mb-5`}>Include & Exclude Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <ul>
                                    {Object.entries(serviceData.include).map(([key, value]) => (
                                        <li className="text-sm md:text-[0.938rem] lg:text-base mb-3 flex items-center" key={key}>
                                            <Plus size={20} color="#ff9302" className="mr-2" strokeWidth="3" />
                                            {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <ul className="gap-4">
                                    {Object.entries(serviceData.exclude).map(([key, value]) => (
                                        <li className="text-sm md:text-[0.938rem] lg:text-base mb-3 flex items-center" key={key}>
                                            <Minus size={20} color="#ff9302" className="mr-2" strokeWidth="3" />
                                            {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </main>
                    <aside className="flex flex-col gap-8 lg:w-[31.66%]">
                        <section className="p-8 h-fit bg-white">
                            <h2 className={`${rajdhani.className} text-[#13213C] text-[1.375rem] md:text-[1.563rem] lg:text-[1.75rem] mb-5`}>Related Services</h2>
                            <p className="text-sm md:text-[0.938rem] lg:text-base text-[#535353] mb-4">Convallis suspendisse rhoncus scelerisque eu penatibus consequat feugiat.</p>
                            <ul>
                                {Object.entries(services).map(([key, value]) => (
                                    <li className="mb-2" key={key}>
                                        <a className="text-sm md:text-[0.938rem] lg:text-base text-[#535353] hover:text-[#ff9302]" href={`/services/${key}`}>{value.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section className="p-8 w-full h-fit bg-contactServices relative lg:w-full lg:h-[232px]">
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className='flex flex-col relative'>
                                <h2 className={`${rajdhani.className} text-white text-[1.375rem] md:text-[1.563rem] lg:text-[1.75rem] mb-4`}>Contact Us</h2>
                                <p className='text-sm md:text-[0.938rem] lg:text-base text-white mb-3'>Lets start working together and start creating all your works reality.</p>
                                <Link className={`${rajdhani.className} text-base md:text-lg lg:text-[1.188rem] bg-[#ff9302] px-6 py-3 text-center text-white hover:bg-[#13213C] hover:text-[#ff9302] transition-all`} href="/contact">Contact Us</Link>
                            </div>
                        </section>
                    </aside>
                </div>
            </section>
            <ServicesPortfolio className='mb-20' />
            <ChooseAbout className='mb-1' />
            <TestimonialsPortfolio />
            <FooterCTA className='mb-20 mt-20' />
            <Footer />
        </TranslationsProvider>
    );
}
