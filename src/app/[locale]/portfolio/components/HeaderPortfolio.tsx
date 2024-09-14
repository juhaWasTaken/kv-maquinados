import '../index.css';
import { Link } from '@/i18n/routing';
import { ChevronsRight } from 'lucide-react';
import { Rajdhani } from 'next/font/google';
import Image from 'next/image';
import IMGHeader from '@/assets/images/aboutHeader.webp'
import { useTranslations } from 'next-intl';

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export function HeaderPortfolio() {

    const t = useTranslations('nav')
    return (
        <section className="relative h-[620px] md:h-[364px] bg-cover bg-center mb-20">
            {/* Imagen de fondo optimizada */}
            <Image
                src={IMGHeader}
                alt="Portfolio Background"
                fill
                style={{objectFit:"cover"}}
                priority
                className="z-0"
            />
            {/* Overlay para oscurecer la imagen de fondo */}
            <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
            {/* Contenido principal */}
            <div className="relative z-10 flex flex-col items-center justify-center max-w-[1280px] h-full mx-auto text-center gap-3">
                <h1 className={`${rajdhani.className} text-white text-[37px] md:text-[47px] lg:text-[58px]`}>
                    {t('portfolio')}
                </h1>
                <div className="flex gap-3 flex-row bg-[#13213C] px-[12px] md:px-4 py-2 items-center">
                    <Link href="/" className="text-white font-semibold uppercase text-sm md:text-base">
                        {t('home')}
                    </Link>
                    <ChevronsRight stroke="#ff9302" />
                    <Link href="/portfolio" className="text-white font-semibold uppercase text-sm md:text-base">
                        {t('portfolio')}
                    </Link>
                </div>
            </div>
        </section>
    )
}