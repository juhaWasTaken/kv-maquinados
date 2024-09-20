'use client'

import Image from "next/image"
import Isotipo from '@/assets/images/Isotipo.png'
import { Link } from "@/i18n/routing"
import NavigationLink from "../ui/NavigationLink"
import React, { useState } from "react"
import { Clock, MapPinIcon, Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"
import LocaleSwitcher from "../LocaleSwitcher"

export function Navbar() {
    const t = useTranslations('nav') 
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <section className="bg-[#13213C]  z-50 relative">
                <div className="flex flex-col gap-1 md:flex-row items-center justify-between max-w-[1280px] mx-auto py-2 px-4">
                    <p className="flex items-center text-xs md:text-sm text-center text-balance text-white gap-2 font-normal">
                        <Clock className="w-4 h-4 text-orange-400" />
                        {t('schedule')}
                    </p>
                    <p className="flex items-center text-xs md:text-sm text-center text-balance text-white gap-2 font-normal">
                        <MapPinIcon className="w-4 h-4 text-orange-400" />
                        {t('location')}
                    </p>
                </div>
            </section>
            <section className="border-b border-gray-800 w-full z-50 relative ">
                <div className="flex flex-col md:flex-row mx-auto justify-between max-w-[1280px]">
                    <div className="flex items-center justify-between gap-2 border-b border-gray-500 md:border-none py-3 px-4">
                        <div className="flex items-center gap-1">
                            <Link href='/' className="flex items-center uppercase font-bold text-lg hover:text-[#FF9302] text-wrap">
                                <Image src={Isotipo} alt="Logo KV Maquinados" className="w-auto h-auto" width={160} height={160} />
                            </Link>
                        </div>
                        <div className="md:hidden cursor-pointer bg-gray-200 p-[2px] rounded-sm h-fit" onClick={toggleMenu}>
                            {menuOpen ? <X className="hover:text-[#ff9302]" /> : <Menu className="hover:text-[#ff9302]" />}
                        </div>
                    </div>
                    <nav className={`flex flex-col md:flex-row p-1 md:px-4 gap-[2px] bg-gray-200 md:bg-transparent md:gap-4 lg:gap-5 md:items-center ${menuOpen ? 'block' : 'hidden'} md:flex md:text-center`}>
                        <NavigationLink href="/" >{t('home')}</NavigationLink>
                        <NavigationLink href="/services" >{t('services')}</NavigationLink>
                        <NavigationLink href="/contact" >{t('contact')}</NavigationLink>
                        <NavigationLink href="/about-us" >{t('about_us')}</NavigationLink>
                        <NavigationLink href="/portfolio" >{t('portfolio')}</NavigationLink>
                        <LocaleSwitcher />
                    </nav>
                </div>
            </section>
        </>
    )
}