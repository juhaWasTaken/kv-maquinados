'use client'

import Image from "next/image"
import { Rajdhani } from "next/font/google";
import worker from "../../assets/images/worker.jpg"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export function AboutHome({className=""}) {

    const pathname = usePathname()
    const {t} = useTranslation();

    return (
        <section className={`max-w-[1280px] mx-auto relative ${className}`}>
            <div className="bg-gradient-custom ">
                <div className="p-5 md:p-10 flex flex-col lg:flex-row py-[48px] pb-[32px] ">
                    <div className="mb-10 lg:max-w-[405px]">
                        <p className={`text-[13px] md:text-lg uppercase ${rajdhani.className} mb-5`}>{t('aboutHome.section')}</p>
                        <h2 className={`${rajdhani.className} text-[31px] md:text-[38px] lg:text-5xl mb-5 text-[#13213C]`}>{t('aboutHome.title')}</h2>
                        <p className="text-[16px] md:text-lg lg:text-[20px] lg:max-w-[362px]">{t('aboutHome.phrase')}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-5">
                        <div className="flex flex-col justify-between items-end flex-grow lg:max-w-[405px]">
                            <div className="mb-5">
                                <p className="text-[#535353] leading-6 text-[14px] md:text-[16px] ">{t('aboutHome.text-1')}</p>
                                <br />
                                <p className="text-[#535353] text-[14px] md:text-[16px]">{t('aboutHome.text-2')}</p>
                            </div>
                            <Link href="#" className={`bg-[#ff9302] text-lg text-white py-3 px-6 hover:bg-[#13213C] hover:text-[#ff9302] w-fit transition-colors duration-300 ${rajdhani.className}`}>{t('aboutHome.btn-txt')}</Link>
                        </div>
                        <div className="flex-grow lg:max-w-[405px]">
                            <Image src={worker} alt="Worker" className="w-full min-h-full max-h-[220px] md:max-h-none lg:max-w-[385px] lg:max-h-[385px] object-cover" priority />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}