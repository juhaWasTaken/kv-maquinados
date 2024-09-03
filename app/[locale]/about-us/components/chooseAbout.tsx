'use client'

import '../index.css';
import { Rajdhani } from 'next/font/google';
import { ChevronsRight } from 'lucide-react';
import chooseAbout from '@/assets/images/chooseAbout.webp'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

const reasons = [
    {
        title: "about:choose.reasons.r1.title",
        description: "about:choose.reasons.r1.text"
    },
    {
        title: "about:choose.reasons.r2.title",
        description: "about:choose.reasons.r2.text"
    },
    {
        title: "about:choose.reasons.r3.title",
        description: "about:choose.reasons.r3.text"
    },
    {
        title: "about:choose.reasons.r4.title",
        description: "about:choose.reasons.r4.text"
    }
]

export function ChooseAbout({ className = "" }) {

    const {t} = useTranslation();

    return (
        <section className={`${className} max-w-[1280px] mx-auto`}>

            <div className='flex flex-col lg:flex-row'>
                <div className='relative h-[220px] md:h-[400px] w-full lg:min-h-[480px] lg:w-[40%] order-last lg:order-1'>
                    <Image src={chooseAbout} alt='Choose About Image' fill style={{objectFit:'cover'}} className='absolute inset-0' sizes="(max-width: 1024px) 100vw, 40vw" />
                    <div className='absolute left-0 bottom-0 bg-white/85 flex flex-col px-5 pt-3 pb-[15px] md:px-6 md:pt-[18px] md:pb-5 w-fit mr-4 md:mr-0 text-center'>
                        <h3 className={`${rajdhani.className} text-[#ff9302] text-[37px] md:text-[47px] lg:text-[58px] tracking-[-2px] text-center`}>25+</h3>
                        <p className='text-[#535353] text-xs md:text-[13px] lg:text-sm uppercase tracking-widest font-semibold'>{t('about:choose.numProjectsTxt')}</p>
                    </div>
                </div>

                <div className='mb-8 lg:w-[60%] lg:ml-[48px] lg:order-2'>
                    <p className='text-[#13213C] uppercase tracking-widest text-xs md:text-sm lg:text-base font-semibold mb-5'>{t('about:choose.section')}</p>
                    <h2 className={`${rajdhani.className} text-[#13213C] text-[31px] md:text-[38px] lg:text-[46px] mb-5 leading-tight `}>{t('about:choose.title')}</h2>
                    <p className='text-[#535353] text-sm md:text-[15px] lg:text-base'>{t('about:choose.text')}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex ">
                                <ChevronsRight size={20} stroke='white' className="text-[#13213C] p-[2px] bg-[#ff9302] min-h-[40px] min-w-[40px] mr-[15px] md:mr-5" />
                                <div>
                                    <h3 className={`${rajdhani.className} text-[#13213C] text-[19px] md:text-[21px] lg:text-[23px] mb-[10px] font-bold`}>{t(reason.title)}</h3>
                                    <p className='text-[#535353] text-sm md:text-[15px] lg:text-base'>{t(reason.description)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    )
}