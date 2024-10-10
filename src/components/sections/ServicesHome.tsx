import { Rajdhani } from "next/font/google"
import Image from "next/image";
import construction from "@/assets/icons/construction.svg";
import users from "../../assets/icons/users.svg";
import building from "../../assets/icons/building.svg";
import tool from "../../assets/icons/tool.svg";
import paint from "../../assets/icons/paint.svg";
import barrierBlock from "../../assets/icons/barrier-block.svg";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export function ServicesHome() {
    const t = useTranslations('servicesHome');

    const servicesInfo = [
        {
            title: 'services.service-1.title',
            text: 'services.service-1.text',
            icon: construction,
            infoCTA: 'btn-txt'
        },
        {
            title: 'services.service-2.title',
            text: 'services.service-2.text',
            icon: users,
            infoCTA: 'btn-txt'
        },
        {
            title: 'services.service-3.title',
            text: 'services.service-3.text',
            icon: building,
            infoCTA: 'btn-txt'
        },
        {
            title: 'services.service-4.title',
            text: 'services.service-4.text',
            icon: tool,
            infoCTA: 'btn-txt'
        },
        {
            title: 'services.service-5.title',
            text: 'services.service-5.text',
            icon: paint,
            infoCTA: 'btn-txt'
        },
        {
            title: 'services.service-6.title',
            text: 'services.service-6.text',
            icon: barrierBlock,
            infoCTA: 'btn-txt'
        },
    ];

    return (
        <section className="pt-[3em] max-w-[1280px] mx-auto p-5">
            <div>
                <p className="text-[16px] md:text-[18px] text-[#13213C] font-medium">{t('section')}</p>
                <h2 className={`${rajdhani.className} text-[31px] md:text-[38px] lg:text-[42px] text-[#13213C]`}>{t('title')}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {servicesInfo.map((service, index) => (
                    <div key={index} className="grid grid-rows-[auto,auto,1fr,auto] px-[20px] md:px-[30px] pb-[30px] bg-white servShadow hover:border-b-[2px] hover:border-[#ff9302]">
                        <Image src={service.icon} alt={service.title} className="bg-[#ff9302] p-3" width={64} height={64} loading="eager" priority />
                        <h3 className={`${rajdhani.className} text-[#13213C] text-[22px] md:text-[25px] lg:text-[28px] font-medium mt-5`}>{t(service.title)}</h3>
                        <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#535353] mt-5">{t(service.text)}</p>
                        <Link href='/services' className={`text-lg text-[#ff9302] border-b border-[#ff9302] mb-[1px] hover:border-[#13213C] hover:text-[#13213C] w-fit transition-colors duration-300 mt-5 ${rajdhani.className}`}>{t(service.infoCTA)}</Link>
                    </div>
                ))}
            </div>
        </section>
    )
}