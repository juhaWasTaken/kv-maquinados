'use client'

import { Rajdhani } from "next/font/google";
import { ChevronsRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

const sectorsInfo = [
    {
        title: 'sectorHome.sectors.sector-1.title',
        text: 'sectorHome.sectors.sector-1.text',
    },
    {
        title: 'sectorHome.sectors.sector-2.title',
        text: 'sectorHome.sectors.sector-2.text',
    },
    {
        title: 'sectorHome.sectors.sector-3.title',
        text: 'sectorHome.sectors.sector-3.text',
    },
    {
        title: 'sectorHome.sectors.sector-4.title',
        text: 'sectorHome.sectors.sector-4.text',
    },
    {
        title: 'sectorHome.sectors.sector-5.title',
        text: 'sectorHome.sectors.sector-5.text',
    },
    {
        title: 'sectorHome.sectors.sector-6.title',
        text: 'sectorHome.sectors.sector-6.text',
    }
]

export function ParallaxSection({className =""}) {

    const pathname = usePathname()
    const {t} = useTranslation();

    return (
        <section className={`parallax-section ${className}`}>
            <div className="content max-w-[1280px] mx-auto relative pl-5">
                <div className="content-inner bg-white/86 content-custom max-w-[857px]">
                    <h2 className={`${rajdhani.className} text-[31px] md:text-[38px] lg:text-[46px] mb-3 text-[#13213C]`}>{t('sectorHome.title')}<span className="text-[#ff9302]">.</span></h2>
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#535353] mb-5">{t('sectorHome.text')}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {sectorsInfo.map((sector, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="flex items-center content-center gap-1 mb-[10px]">
                                    <ChevronsRight size={24} color="#ff9302" />
                                    <h3 className={`text-[19px] md:text-[21px] lg:text-[23px] text-[#13213C] ${rajdhani.className}`}>{t(sector.title)}</h3>
                                </div>
                                <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#535353]">{t(sector.text)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}