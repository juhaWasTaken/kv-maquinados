'use client'

import { Building, Clock, Phone, Mail, MapPinIcon } from "lucide-react"
import { Rajdhani } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' })

export function Footer() {

    const pathname = usePathname()
    const { t } = useTranslation()

    return (
        <>
            <footer className="bg-white pb-10">
                <div className="max-w-[1280px] mx-auto px-5">
                    <div className="flex flex-col lg:flex-row justify-between gap-8">
                        {/* Company Info */}
                        <div className="flex flex-col gap-5 lg:gap-10 flex-1 items-start">
                            <div className="flex items-center gap-1">
                                <Link href='/' className="uppercase font-semibold text-lg hover:text-[#FF9302]">
                                    Placeholder
                                </Link>
                                <Building />
                            </div>
                            <p className="text-[#535353]">
                                Nisi conubia taciti eget erat auctor. Ridiculus sodales dui dis arcu dictumst sed magna per.
                            </p>
                        </div>

                        {/* Useful Links */}
                        <div className="flex-1">
                            <div className="mb-4">
                                <h3 className={`${rajdhani.className} text-lg md:text-[21px] lg:text-[23px] font-semibold text-[#13213C] mb-2`}>{t('footer.linksTitle')}</h3>
                                <div className="h-[5px] w-[30px] md:w-[35px] lg:w-[40px] bg-[#ff9302]"></div>
                            </div>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-[#535353] hover:text-[#ff9302] transition-colors">About Us</Link></li>
                                <li><Link href="#" className="text-[#535353] hover:text-[#ff9302] transition-colors">Services</Link></li>
                                <li><Link href="#" className="text-[#535353] hover:text-[#ff9302] transition-colors">Our Portfolio</Link></li>
                                <li><Link href="#" className="text-[#535353] hover:text-[#ff9302] transition-colors">Contact Us</Link></li>
                                <li><Link href="#" className="text-[#535353] hover:text-[#ff9302] transition-colors">FAQ</Link></li>
                            </ul>
                        </div>



                        {/* Contact Info */}
                        <div className="flex-1">
                            <div className="mb-4">
                                <h3 className={`${rajdhani.className} text-lg md:text-[21px] lg:text-[23px] font-semibold text-[#13213C] mb-2`}>{t('footer.contactTitle')}</h3>
                                <div className="h-[5px] w-[30px] md:w-[35px] lg:w-[40px] bg-[#ff9302]"></div>
                            </div>
                            <p className="text-[#535353]">{t('footer.contact.address')}</p>
                            <p className="text-[#535353] flex items-center mt-2"><span className="material-icons text-[#ff9302] mr-2"><Clock fill="#ff9302" stroke="white" /></span>{t('footer.contact.schedule')}</p>
                            <p className="text-[#535353] flex items-center mt-2"><span className="material-icons text-[#ff9302] mr-2"><Mail fill="#ff9302" stroke="white" /></span>example@mail.com</p>
                            <p className="text-[#535353] flex items-center mt-2"><span className="material-icons text-[#ff9302] mr-2"><Phone fill="#ff9302" stroke="white" /></span>+6221 2002 2012</p>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="bg-[#13213C]">
                <div className="flex flex-col gap-1 md:flex-row items-center justify-between max-w-[1280px] mx-auto py-5 px-4">
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
        </>
    )
}