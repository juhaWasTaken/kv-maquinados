import '../index.css';
import { Rajdhani } from 'next/font/google';
import Image, { StaticImageData } from 'next/image';
import construction from '@/assets/icons/construction.svg';
import users from '@/assets/icons/users.svg';
import building from '@/assets/icons/building.svg';
import tool from '@/assets/icons/tool.svg';
import paint from '@/assets/icons/paint.svg';
import barrierBlock from '@/assets/icons/barrier-block.svg';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import NavigationLink from '@/components/ui/NavigationLink';

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

interface Service {
    link: string;
    name: string;
    title: string;
    text: string;
    icon: StaticImageData;
    infoCTA: string;
}

const services: Service[] = [
    {
        link: 'welding-structural',
        name: 'service 1',
        title: 'services.service-1.title',
        text: 'services.service-1.text',
        icon: construction,
        infoCTA: 'btn-txt',
    },
    {
        link: 'industrial-maintenance',
        name: 'service 2',
        title: 'services.service-2.title',
        text: 'services.service-2.text',
        icon: users,
        infoCTA: 'btn-txt',
    },
    {
        link: 'machining-parts',
        name: 'service 3',
        title: 'services.service-3.title',
        text: 'services.service-3.text',
        icon: building,
        infoCTA: 'btn-txt',
    },
    {
        link: 'installations-management',
        name: 'service 4',
        title: 'services.service-4.title',
        text: 'services.service-4.text',
        icon: tool,
        infoCTA: 'btn-txt',
    },
    {
        link: 'metal-cutting',
        name: 'service 5',
        title: 'services.service-5.title',
        text: 'services.service-5.text',
        icon: paint,
        infoCTA: 'btn-txt',
    },
    {
        link: 'project-development',
        name: 'service 6',
        title: 'services.service-6.title',
        text: 'services.service-6.text',
        icon: barrierBlock,
        infoCTA: 'btn-txt',
    },
];

export function ServicesHome() {
    const t = useTranslations('servicesHome');

    return (
        <section className="max-w-[1280px] mx-auto p-5">
            <div className="flex flex-col items-center mb-10">
                <p className="text-[16px] md:text-[18px] text-[#13213C] font-medium text-center">
                    {t('section')}
                </p>
                <h2 className={`${rajdhani.className} text-[31px] md:text-[38px] lg:text-[42px] text-[#13213C] text-center`}>
                    {t('title')}
                </h2>
                <p className="text-[#535353] text-sm md:text-[0.938rem] lg:text-base text-center max-w-[37.5rem]">
                {t('headerTxt')}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="grid grid-rows-[auto,auto,1fr,auto] px-[20px] md:px-[30px] pb-[30px] bg-white servShadow hover:border-b-[2px] hover:border-[#ff9302]"
                    >
                        <Image src={service.icon} alt={service.title} className="bg-[#ff9302] p-3" width={64} height={64} loading="eager" />
                        <h3 className={`${rajdhani.className} text-[#13213C] text-[22px] md:text-[25px] lg:text-[28px] font-medium mt-5`}>
                            {t(service.title)}
                        </h3>
                        <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#535353] mt-5">{t(service.text)}</p>
                        <Link href={`/services/${service.link}`} className={`text-lg text-[#ff9302] border-b border-[#ff9302] mb-[1px] hover:border-[#13213C] hover:text-[#13213C] w-fit transition-colors duration-300 mt-5 ${rajdhani.className}`}>
                            {t(service.infoCTA)}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}