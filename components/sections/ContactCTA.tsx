'use client'

import Link from "next/link"
import { Rajdhani } from "next/font/google";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export function ContactCTA() {

    const pathname = usePathname()
    const {t} = useTranslation();

    return (
        <section className="relative bg-planosCTA max-w-[1440px] h-[462px] bg-center bg-cover mx-auto p-5 "> {/* mb-20 px-8 md:pt-[112px] pt-[62px] */}
            <div className="absolute bottom-0 left-0 flex flex-col bg-white p-[28px] lg:p-[42px] max-w-[680px] gap-5 shadow-custom m-5">
                <h2 className={`text-[#13213C] text-[31px] md:text-[38px] lg:text-[46px] ${rajdhani.className} leading-8 md:leading-[41px] lg:leading-[50px] `}>{t('contactHome.title')}</h2> {/* font-custom-calc leading-[30px] md:leading-[50px] */}
                <p className="text-[#535353] text-sm md:text-[15px] lg:text-base">{t('contactHome.text')}</p> {/* text-[#535353] font-custom-clamp */}
                <Link href="#" className={`bg-[#ff9302] text-lg text-white py-3 px-6 hover:bg-[#13213C] hover:text-[#ff9302] w-fit transition-colors duration-300 ${rajdhani.className}`}>{t('contactHome.btn-txt')}</Link>
            </div>
        </section>
    )
}