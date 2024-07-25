'use client';

import '../index.css';
import Image from 'next/image';
import { Rajdhani } from 'next/font/google';
import faqIMG from '../../../../assets/images/faqIMG.jpg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export function FAQAbout({ className = "" }) {

    const pathname = usePathname()
    const { t } = useTranslation();

    return (
        <section className={`${className} max-w-[1280px] mx-auto`}>

            <div className='flex flex-col gap-6 lg:gap-10 lg:flex-row'>
                <div className='flex flex-col lg:w-[60%]'>
                    <h2 className={`${rajdhani.className} text-[31px] md:text-[38px] lg:text-[46px] mb-3`}>{t('about:faq.title')}</h2>
                    <div className=''>
                        <details name='cookies' className='border-t border-[#53535341] '>
                            <summary
                                className={`${rajdhani.className} py-[15px] md:py-[20px] lg:py-[25px] text-[19px] md:text-[21px] lg:text-[23px]`}>
                                1.- {t('about:faq.questions.q1.question')}
                            </summary>
                            <p className='text-[#535353] text-sm md:text-[15px] lg:text-base pb-[10px] md:pb-5 md:pl-4 md:pr-5'>
                                {t('about:faq.questions.q1.answer')}
                            </p>
                        </details>
                        <details name='cookies' className='border-t border-[#53535341] '>
                            <summary
                                className={`${rajdhani.className} py-[15px] md:py-[20px] lg:py-[25px] text-[19px] md:text-[21px] lg:text-[23px]`}>
                                2.- {t('about:faq.questions.q2.question')}
                            </summary>
                            <p className='text-[#535353] text-sm md:text-[15px] lg:text-base pb-[10px] md:pb-5 md:pl-4 md:pr-5'>
                                {t('about:faq.questions.q2.answer')}
                            </p>
                        </details>
                        <details name='cookies' className='border-t border-[#53535341] '>
                            <summary
                                className={`${rajdhani.className} py-[15px] md:py-[20px] lg:py-[25px] text-[19px] md:text-[21px] lg:text-[23px]`}>
                                3.- {t('about:faq.questions.q3.question')}
                            </summary>
                            <p className='text-[#535353] text-sm md:text-[15px] lg:text-base pb-[10px] md:pb-5 md:pl-4 md:pr-5'>
                                {t('about:faq.questions.q3.answer')}
                            </p>
                        </details>
                        <details name='cookies' className='border-t border-[#53535341] '>
                            <summary
                                className={`${rajdhani.className} py-[15px] md:py-[20px] lg:py-[25px] text-[19px] md:text-[21px] lg:text-[23px]`}>
                                4.- {t('about:faq.questions.q4.question')}
                            </summary>
                            <p className='text-[#535353] text-sm md:text-[15px] lg:text-base pb-[10px] md:pb-5 md:pl-4 md:pr-5'>
                                {t('about:faq.questions.q4.answer')}
                            </p>
                        </details>
                        <details name='cookies' className='border-t border-[#53535341] '>
                            <summary
                                className={`${rajdhani.className} py-[15px] md:py-[20px] lg:py-[25px] text-[19px] md:text-[21px] lg:text-[23px]`}>
                                5.- {t('about:faq.questions.q5.question')}
                            </summary>
                            <p className='text-[#535353] text-sm md:text-[15px] lg:text-base pb-[10px] md:pb-5 md:pl-4 md:pr-5'>
                                {t('about:faq.questions.q5.answer')}
                            </p>
                        </details>
                    </div>
                </div>

                <div className='relative bg-center h-[400px] w-full lg:min-h-[560px] lg:w-[40%]'>
                    <Image src={faqIMG} layout='fill' objectFit='cover' alt='FAQ' className='absolute' />
                    <div className='absolute left-0 bottom-0 bg-white/85 flex flex-col gap-3 p-5 md:p-7 lg:p-9 w-fit mr-4 md:mr-0 lg:w-[70%]'>
                        <h2 className={`${rajdhani.className} text-[#13213C] text-[22px] md:text-[25px] lg:text-[28px]`}>{t('about:faq.title-2')}</h2>
                        <p className='text-[#535353] text-sm md:text-[15px] lg:text-base'>{t('about:faq.imageText')}</p>
                        <Link href="#" className={`bg-[#ff9302] text-sm md:text-[15px] lg:text-base text-white py-[10px] px-5 hover:bg-[#13213C] hover:text-[#ff9302] w-fit transition-colors duration-300 ${rajdhani.className}`}>{t('about:faq.btnText')}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}