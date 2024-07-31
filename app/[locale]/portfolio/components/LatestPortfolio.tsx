'use client'

import { Rajdhani } from "next/font/google"
import Image from "next/image"
import factory from '../../../../assets/images/latestProjects/factory.jpg'
import factory2 from '../../../../assets/images/latestProjects/factory2.jpg'
import factory3 from '../../../../assets/images/latestProjects/factory3.jpg'
import factory4 from '../../../../assets/images/latestProjects/factory4.jpg'
import factory5 from '../../../../assets/images/latestProjects/factory5.jpg'
import factory6 from '../../../../assets/images/latestProjects/factory6.jpg'
import factory7 from '../../../../assets/images/latestProjects/factory7.jpg'
import factory8 from '../../../../assets/images/latestProjects/factory8.jpg'
import factory9 from '../../../../assets/images/latestProjects/factory9.jpg'
import factory10 from '../../../../assets/images/latestProjects/factory10.jpg'
import factory11 from '../../../../assets/images/latestProjects/factory11.jpg'
import factory12 from '../../../../assets/images/latestProjects/factory12.jpg'
import { Redo } from "lucide-react"
import { useTranslation } from "react-i18next"
import { usePathname } from "next/navigation"

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

const projects = [
    {
        img: factory6,
        name: 'portfolio:latestProjects.projects.project-1.name',
        type: 'portfolio:latestProjects.projects.project-1.type',
    },
    {
        img: factory7,
        name: 'portfolio:latestProjects.projects.project-2.name',
        type: 'portfolio:latestProjects.projects.project-2.type',
    },
    {
        img: factory2,
        name: 'portfolio:latestProjects.projects.project-3.name',
        type: 'portfolio:latestProjects.projects.project-3.type',
    },
    {
        img: factory9,
        name: 'portfolio:latestProjects.projects.project-4.name',
        type: 'portfolio:latestProjects.projects.project-4.type',
    },
    {
        img: factory5,
        name: 'portfolio:latestProjects.projects.project-5.name',
        type: 'portfolio:latestProjects.projects.project-5.type',
    },
    {
        img: factory,
        name: 'portfolio:latestProjects.projects.project-6.name',
        type: 'portfolio:latestProjects.projects.project-6.type',
    },
    {
        img: factory3,
        name: 'portfolio:latestProjects.projects.project-7.name',
        type: 'portfolio:latestProjects.projects.project-7.type',
    },
    {
        img: factory8,
        name: 'portfolio:latestProjects.projects.project-8.name',
        type: 'portfolio:latestProjects.projects.project-8.type',
    },
    {
        img: factory4,
        name: 'portfolio:latestProjects.projects.project-9.name',
        type: 'portfolio:latestProjects.projects.project-9.type',
    }
]

export function LatestProjectsPortfolio({ className = "" }) {

    const pathname = usePathname()
    const { t } = useTranslation();

    return (
        <section className={`${className} max-w-[1280px] mx-auto px-5`}>
            <div className="flex flex-col mb-10 lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-10">
                <div className="flex flex-col gap-4 lg:w-1/2 lg:pr-20">
                    <p className="text-[#13213C] text-xs md:text-sm lg:text-[15px] uppercase font-medium tracking-widest">{t('portfolio:latestProjects.section')}</p>
                    <h2 className={`${rajdhani.className} text-[#13213C] font-bold text-[31px] md:text-[38px] lg:text-[46px]`}>{t('portfolio:latestProjects.title')}</h2>
                </div>
                <div className="flex flex-col gap-4 lg:w-1/2 ">
                    <p className="text-[#535353] text-sm md:text-[15px] lg:text-[16px] md:mb-5 lg:mb-10">{t('portfolio:latestProjects.text')}</p>
                    {/* <div className="h-[5px] w-[60px] md:w-[80px] lg:w-[100px] bg-[#ff9302]"></div> */}

                    <div className="flex ">
                        <p className="text-[#13213C] font-semibold tracking-wider text-base  uppercase">{t('portfolio:latestProjects.click')}</p>
                        <Redo size={40} color="#ff9302" className="rotate-[85deg] pt-1" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {projects.map((project, index) => (
                    <div key={index} className="relative group overflow-hidden">
                        <Image src={project.img} alt={t(project.name)} className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                        <div className="absolute inset-0 bg-[#13213C] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-center">
                            <h3 className={`${rajdhani.className} text-white font-bold text-2xl md:text-[30px] lg:text-[35px] mb-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out`}>{t(project.name)}</h3>
                            <p className="text-white font-semibold text-xs md:text-sm lg:text-[15px] tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out">{t(project.type)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}