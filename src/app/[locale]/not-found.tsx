import { Navbar } from '@/components/sections/Navbar'
import { useTranslations } from 'next-intl'
import { Rajdhani } from "next/font/google";
import Link from 'next/link'

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export default function NotFound() {
    const t = useTranslations('not-found')
    return (
        <div>
            <Navbar />
            <main className='flex flex-col items-center justify-center min-h-screen text-center px-3'>
                <h2 className={`${rajdhani.className} text-3xl md:text-4xl lg:text-5xl pb-2`}>{t('title')}</h2>
                <p className='md:text-lg pb-4'>{t('text')}</p>
                <Link className={`bg-[#ff9302] flex items-center text-lg text-white py-2 px-6 hover:bg-[#13213C] hover:text-[#ff9302] transition-colors duration-300 ${rajdhani.className}`} href="/">{t('button')}</Link>
            </main>
        </div>
    )
}