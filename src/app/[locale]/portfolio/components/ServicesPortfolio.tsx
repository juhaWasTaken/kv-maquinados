import { Link } from "@/i18n/routing";
import { Rajdhani } from "next/font/google";
import Image from "next/image";
import ServicesIMG from '@/assets/images/workerPortfolio.webp'
import { useTranslations } from "next-intl";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export function ServicesPortfolio({ className = "" }) {

    const t = useTranslations('ideas')

    return (
        <section className={`${className} w-full h-fit md:min-h-[448px] lg:min-h-[580px] flex justify-center items-center relative`}>
            <Image
                src={ServicesIMG} // Reemplaza con la ruta correcta de la imagen
                alt={t('altText')}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/45"></div> {/* Overlay */}
            <div className="relative max-w-[1280px] mx-auto px-5 py-[35px] flex flex-col gap-5 w-full ">
                <div className="flex gap-[15px]">
                    <div className="h-[16px] bg-[#ff9302] w-[5px]"></div>
                    <p className="uppercase text-white font-semibold tracking-wider text-xs md:text-[13px] lg:text-[15px] ">
                        {t('section')}
                    </p>
                </div>
                <h2 className={`${rajdhani.className} text-white font-bold text-[31px] md:text-[38px] lg:text-[46px] leading-[50px] max-w-[568px]`}>
                    {t('title')}
                </h2>
                <p className="text-white text-sm md:text-[15px] lg:text-base lg:mb-[32px] max-w-[568px]">
                    {t('text')}
                </p>
                <Link href="#" className={`bg-[#ff9302] text-sm md:text-[15px] lg:text-base text-white py-[10px] px-5 hover:bg-[#13213C] hover:text-[#ff9302] text-center w-full md:w-fit transition-colors duration-300 ${rajdhani.className}`}>
                    {t('btnTxt')}
                </Link>
            </div>
        </section>
    )
}