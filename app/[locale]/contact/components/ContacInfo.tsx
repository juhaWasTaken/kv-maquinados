'use client'

import '../index.css';
import { Rajdhani } from "next/font/google";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from 'react-i18next';

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export function ContactInfo() {

    const { t } = useTranslation();

    return (
        <section className="bg-[#f5f5f5] ">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4 pt-10 pb-14">
                <div className="bg-white px-10 py-6 text-center flex flex-col items-center hover:customShadow transition-all">
                    <MapPin size={32} fill="#ff9302" stroke="#ffffff" />
                    <h3 className={`${rajdhani.className} text-[1.375rem] md:text-[1.563rem] lg:text-[1.75rem]`}>{t('contact:contactInfo.adress')}</h3>
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#535353]">Cerro de la bufa 1066 Aztlán, Reynosa, Tamaulipas, Mexico</p>
                </div>
                <div className="bg-white px-10 py-6 text-center flex flex-col items-center hover:customShadow transition-all">
                    <Mail size={32} fill="#ff9302" stroke="white" />
                    <h3 className={`${rajdhani.className} text-[1.375rem] md:text-[1.563rem] lg:text-[1.75rem]`}>{t('contact:contactInfo.phone')}</h3>
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#535353]">+6221.2002.2012</p>
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#535353]">+6221.2002.2012</p>
                </div>
                <div className="bg-white px-10 py-6 text-center flex flex-col items-center hover:customShadow transition-all">
                    <Phone size={32} fill="#ff9302" stroke="#ff9302" />
                    <h3 className={`${rajdhani.className} text-[1.375rem] md:text-[1.563rem] lg:text-[1.75rem]`}>{t('contact:contactInfo.email')}</h3>
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#535353]">support@yourdomain.tld</p>
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#535353]">hello@yourmail.tld</p>
                </div>
            </div>
        </section>
    )
}