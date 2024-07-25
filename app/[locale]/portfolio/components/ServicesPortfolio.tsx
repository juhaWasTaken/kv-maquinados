'use client'

import Link from "next/link";
import { Rajdhani } from "next/font/google";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export function ServicesPortfolio({ className = "" }) {

    const pathname = usePathname()
    const {t} = useTranslation();

    return (
        <section className={`${className} bg-servicesPortfolio bg-center bg-cover w-full h-fit md:min-h-[448px] lg:min-h-[580px] flex justify-center items-center relative`}>
            <div className="absolute inset-0 bg-black/45"></div> {/* Overlay */}
            <div className="relative max-w-[1280px] mx-auto px-5 py-[35px] flex flex-col gap-5 w-full ">
                <div className="flex gap-[15px]">
                    <div className="h-[16px] bg-[#ff9302] w-[5px]"></div>
                    <p className="uppercase text-white font-semibold tracking-wider text-xs md:text-[13px] lg:text-[15px] ">{t('portfolio:ideas.section')}</p>
                </div>
                <h2 className={`${rajdhani.className} text-white font-bold text-[31px] md:text-[38px] lg:text-[46px] leading-[50px] max-w-[568px]`}>{t('portfolio:ideas.title')}</h2>
                <p className="text-white text-sm md:text-[15px] lg:text-base  lg:mb-[32px] max-w-[568px]">{t('portfolio:ideas.text')}</p>
                <Link href="#" className={`bg-[#ff9302] text-sm md:text-[15px] lg:text-base text-white py-[10px] px-5 hover:bg-[#13213C] hover:text-[#ff9302] text-center w-full md:w-fit transition-colors duration-300 ${rajdhani.className}`}>{t('portfolio:ideas.btnTxt')}</Link>
            </div>
        </section>
    )
}