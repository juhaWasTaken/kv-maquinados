'use client'

import Link from "next/link"
import React, { useState } from "react"
import { Clock, MapPinIcon, Building, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"
import LanguageChanger from "../LanguajeChanger"

const NavLinks = [
    { name: 'nav.home', href: '/' },
    { name: 'nav.services', href: '/services' },
    { name: 'nav.contact', href: '/contact' },
    { name: 'nav.about_us', href: '/about-us' },
    { name: 'nav.portfolio', href: '/portfolio' },
];

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const pathname = usePathname()
    const { t, i18n } = useTranslation();

    return (
        <>
            <section className="bg-[#13213C] ">
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
            <section className="border-b border-gray-800 w-full">
                <nav className="flex flex-col md:flex-row mx-auto justify-between max-w-[1280px]">
                    <div className="flex justify-between border-b border-gray-500 md:border-none py-4 px-4">
                        <div className="flex items-center gap-1">
                            <Link href='/' className="uppercase font-semibold text-lg hover:text-[#FF9302]">
                                Placeholder
                            </Link>
                            <Building />
                        </div>
                        <div className="md:hidden cursor-pointer bg-gray-200 p-[2px] rounded-sm" onClick={toggleMenu}>
                            {menuOpen ? <X className="hover:text-[#ff9302]" /> : <Menu className="hover:text-[#ff9302]" />}
                        </div>
                    </div>
                    <div className={`flex flex-col md:flex-row p-1 md:px-4 gap-[2px] bg-gray-200 md:bg-transparent md:gap-6 md:items-center ${menuOpen ? 'block' : 'hidden'} md:flex`}>
                        {/* <Link className="uppercase px-3 py-3 bg-white hover:bg-[#FF9302] hover:text-white md:hover:bg-transparent md:hover:text-[#ff9302] md:p-0 font-semibold text-sm" href="/">Inicio</Link>
                        <Link className="uppercase px-3 py-3 bg-white hover:bg-[#FF9302] hover:text-white md:hover:bg-transparent md:hover:text-[#ff9302] md:p-0 font-semibold text-sm" href="/">Servicios</Link>
                        <Link className="uppercase px-3 py-3 bg-white hover:bg-[#FF9302] hover:text-white md:hover:bg-transparent md:hover:text-[#ff9302] md:p-0 font-semibold text-sm" href="/">Contacto</Link>
                        <Link className="uppercase px-3 py-3 bg-white hover:bg-[#FF9302] hover:text-white md:hover:bg-transparent md:hover:text-[#ff9302] md:p-0 font-semibold text-sm" href="/">Sobre Nosotros</Link>
                        <Link className="uppercase px-3 py-3 bg-white hover:bg-[#FF9302] hover:text-white md:hover:bg-transparent md:hover:text-[#ff9302] md:p-0 font-semibold text-sm" href="/">Portafolio</Link> */}
                        {NavLinks.map((link) => {
                            const isActive =
                                pathname === link.href ||
                                pathname === `/${i18n.language}${link.href}` ||
                                (link.href === '/' && pathname === `/${i18n.language}`);
                            return (
                                <Link
                                    href={link.href}
                                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                                    key={link.name}
                                >
                                    {t(link.name)}
                                </Link>
                            );
                        })}
                        {/* {`uppercase px-3 py-3 bg-white hover:bg-[#FF9302] hover:text-white md:hover:bg-transparent md:hover:text-[#ff9302] md:p-0 font-semibold text-sm ${isActive ? 'md:bg-transparent md:text-[#ff9302] bg-[#ff9302] text-white' : 'text-black'}`}
                            {`nav-link ${isActive ? 'nav-link-active' : ''}`}
                        */}
                        <LanguageChanger />
                    </div>
                </nav>
            </section>
        </>
    )
}