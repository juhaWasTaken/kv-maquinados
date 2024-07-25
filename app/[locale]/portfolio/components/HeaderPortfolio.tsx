'use client'

import '../index.css';
import Link from 'next/link';
import { ChevronsRight } from 'lucide-react';
import { Rajdhani } from 'next/font/google';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export function HeaderPortfolio() {

    const pathname = usePathname()
    const {t} = useTranslation();

    return (
        <section className="relative h-[620px] md:h-[364px] bg-cover bg-center bg-aboutPortfolio mb-20">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className='relative z-10 flex flex-col items-center justify-center max-w-[1280px] h-full mx-auto text-center gap-3'>
                <h1 className={`${rajdhani.className} text-white text-[37px] md:text-[47px] lg:text-[58px]`}>{t('portfolio:title')}</h1>
                <div className='flex  gap-3 flex-row bg-[#13213C] px-[12px] md:px-4 py-2 items-center'>
                    <Link href="/" className='text-white font-semibold uppercase text-sm md:text-base '>
                        Home
                    </Link>
                    <ChevronsRight stroke='#ff9302' />
                    <Link href="/portfolio" className='text-white font-semibold uppercase text-sm md:text-base '>
                        Portfolio
                    </Link>
                </div>
            </div>
        </section>
    )
}