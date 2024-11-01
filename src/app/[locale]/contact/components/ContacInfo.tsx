import '../index.css';
import { Rajdhani } from "next/font/google";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslations } from 'next-intl';


const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export function ContactInfo() {

    const t = useTranslations('formContact');

    return (
        <section className="bg-[#f5f5f5] ">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4 pt-10 pb-14">
                <div className="bg-white px-10 py-6 text-center flex flex-col items-center hover:customShadow transition-all">
                    <Phone size={32} fill="#ff9302" stroke="#ff9302" />
                    <h3 className={`${rajdhani.className} text-[1.375rem] md:text-[1.563rem] lg:text-[1.75rem]`}>{t('contactInfo.phone')}</h3>
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#535353]">+899 963 7644</p>
                </div>
                <div className="bg-white px-10 py-6 text-center flex flex-col items-center hover:customShadow transition-all">
                    <MapPin size={32} fill="#ff9302" stroke="#ffffff" />
                    <h3 className={`${rajdhani.className} text-[1.375rem] md:text-[1.563rem] lg:text-[1.75rem]`}>{t('contactInfo.address')}</h3>
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#535353]">Cerro de la bufa 1066 Aztlán, Reynosa, Tamaulipas, Mexico</p>
                </div>
                <div className="bg-white px-10 py-6 text-center flex flex-col items-center hover:customShadow transition-all">
                    <Mail size={32} fill="#ff9302" stroke="white" />
                    <h3 className={`${rajdhani.className} text-[1.375rem] md:text-[1.563rem] lg:text-[1.75rem]`}>{t('contactInfo.email')}</h3>
                    <a href="mailto:proyectos@kvmaquinados.com" className="text-[14px] md:text-[15px] lg:text-[16px] text-[#535353] hover:text-[#ff9302]">proyectos@kvmaquinados.com</a>
                </div>
            </div>
        </section>
    )
}