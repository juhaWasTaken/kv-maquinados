'use client'

import { Rajdhani } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' })

export function FooterCTA() {

    const pathname = usePathname()
    const { t } = useTranslation()

    return (
        <section className="parallax-section2 mb-20 mt-32">
            <div className="flex flex-col lg:flex-row gap-3 items-center justify-between max-w-[1280px] mx-auto relative py-12 md:px-5 lg:px-3">
                <h2 className={`${rajdhani.className} text-[31px] md:text-[38px] lg:text-[46px] text-white text-center `}>
                    {t('footerCTA')}
                    <span className="text-[#ff9302]">.</span>
                </h2>
                <div className="flex flex-col w-full text-center md:w-fit lg:flex-row gap-3 px-3">
                    <Link href="#"
                        className={`bg-[#ff9302] text-lg text-white py-2 px-6 flex items-center justify-center hover:bg-[#13213C] hover:text-[#ff9302] transition-colors duration-300 ${rajdhani.className}`}>
                        {t('header.button-1')}
                    </Link>
                    <Link href="#"
                        className={`bg-transparent border-[2px] text-lg border-[#ff9302] text-white py-2 px-6 flex items-center justify-center hover:bg-white hover:border-white hover:text-[#ff9302] transition-colors duration-300 ${rajdhani.className}`}>
                        {t('header.button-2')}
                    </Link>
                </div>
            </div>
        </section>
    )
}