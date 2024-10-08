import Image from 'next/image';
import BackgroundImage from '@/assets/images/image3.webp'
import BoxReveal from "../magicui/box-reveal";
import { Rajdhani } from "next/font/google";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export function HeaderSection() {
    const t = useTranslations('header')

    return (
        <section className="relative h-[620px] md:h-[672px] z-10">
            {/* Imagen optimizada de fondo */}
            <Image
                src={BackgroundImage}
                alt="Background Image"
                fill
                style={{ objectFit: "cover" }}
                priority={true} // Esto asegura que la imagen se cargue rápidamente
                className="pointer-events-none"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Contenido */}
            <div className="relative z-10 flex items-center max-w-[1280px] h-full mx-auto">
                <div className="text-white max-w-[652px] m-5">
                    <BoxReveal boxColor={"#ff9302"} duration={0.5}>
                        <p className={`text-lg md:text-2xl uppercase tracking-wider mb-4 ${rajdhani.className}`}>{t('slogan')}</p>
                    </BoxReveal>
                    <BoxReveal boxColor={"#ff9302"} duration={0.5}>
                        <h1 className={`text-4xl md:text-7xl font-bold leading-tight mb-6 text-balance ${rajdhani.className}`}>{t('title-pt1')} <br /> {t('title-pt2')}</h1>
                    </BoxReveal>
                    <BoxReveal boxColor={"#ff9302"} duration={0.5}>
                        <p className="text-lg md:text-xl mb-8 text-balance">{t('text')}</p>
                    </BoxReveal>
                    <BoxReveal boxColor={"#ff9302"} duration={0.5}>
                        <div className="flex flex-col sm:flex-row gap-5 min-w-full text-center sm:text-start sm:w-fit">
                            <Link href="/contact" className={`bg-[#ff9302] flex items-center text-lg text-white py-2 px-6 hover:bg-[#13213C] hover:text-[#ff9302] transition-colors duration-300 ${rajdhani.className}`}>{t('button-1')}</Link>
                            <Link href="/portfolio" className={`bg-transparent border-[2px] text-lg border-[#ff9302] text-white py-2 px-6 hover:bg-white hover:border-white hover:text-[#ff9302] transition-colors duration-300 ${rajdhani.className}`}>{t('button-2')}</Link>
                        </div>
                    </BoxReveal>
                </div>
            </div>
        </section>
    )
}