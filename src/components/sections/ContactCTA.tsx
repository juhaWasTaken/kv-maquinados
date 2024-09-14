import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Rajdhani } from "next/font/google";
import Planos from "@/assets/images/planos.webp"
import { useTranslations } from "next-intl";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export function ContactCTA() {
    const t = useTranslations('contactHome');

    return (
        <section className="relative max-w-[1440px] h-[462px] mx-auto p-5 overflow-hidden">
            {/* Imagen de fondo optimizada */}
            <Image
                src={Planos}
                alt="Background Image"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="z-0"
            />
            {/* Contenido */}
            <div className="absolute bottom-0 left-0 flex flex-col bg-white p-[28px] lg:p-[42px] max-w-[680px] gap-5 shadow-custom m-5 z-10">
                <h2 className={`text-[#13213C] text-[31px] md:text-[38px] lg:text-[46px] leading-8 md:leading-[41px] lg:leading-[50px] ${rajdhani.className}`}>
                    {t('title')}
                </h2>
                <p className="text-[#535353] text-sm md:text-[15px] lg:text-base">
                    {t('text')}
                </p>
                <Link href="#" className={`bg-[#ff9302] text-lg text-white py-3 px-6 hover:bg-[#13213C] hover:text-[#ff9302] w-fit transition-colors duration-300 ${rajdhani.className}`}>
                    {t('btn-txt')}
                </Link>
            </div>
        </section>
    );
}