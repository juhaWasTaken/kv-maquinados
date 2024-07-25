'use client'

import { usePathname } from "next/navigation";
import BoxReveal from "../magicui/box-reveal";
import { Rajdhani } from "next/font/google";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export function HeaderSection() {

    const pathname = usePathname()
    const {t} = useTranslation();

    return (
        <section className="relative h-[620px] md:h-[672px] bg-cover bg-center bg-image3Header" >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center max-w-[1280px] h-full mx-auto">
                <div className=" text-white max-w-[652px] m-5">
                    <BoxReveal boxColor={"#ff9302"} duration={0.5}>
                        <p className={`text-lg md:text-2xl uppercase tracking-wider mb-4 ${rajdhani.className}`}>{t('header.slogan')}</p>
                    </BoxReveal>
                    <BoxReveal boxColor={"#ff9302"} duration={0.5}>
                        <h1 className={`text-4xl md:text-7xl font-bold leading-tight mb-6 text-balance ${rajdhani.className}`}>{t('header.title-pt1')} <br /> {t('header.title-pt2')}</h1>
                    </BoxReveal>
                    <BoxReveal boxColor={"#ff9302"} duration={0.5}>
                        <p className="text-lg md:text-xl mb-8 text-balance">{t('header.text')}</p>
                    </BoxReveal>
                    <BoxReveal boxColor={"#ff9302"} duration={0.5}>
                        <div className="flex flex-col sm:flex-row gap-5 min-w-full text-center sm:text-start sm:w-fit">
                            <Link href="#" className={`bg-[#ff9302] text-lg text-white py-2 px-6 hover:bg-[#13213C] hover:text-[#ff9302] transition-colors duration-300 ${rajdhani.className}`}>{t('header.button-1')}</Link>
                            <Link href="#" className={`bg-transparent border-[2px] text-lg border-[#ff9302] text-white py-2 px-6 hover:bg-white hover:border-white hover:text-[#ff9302] transition-colors duration-300 ${rajdhani.className}`}>{t('header.button-2')}</Link>
                        </div>
                    </BoxReveal>
                </div>
            </div>
        </section>
    )
}