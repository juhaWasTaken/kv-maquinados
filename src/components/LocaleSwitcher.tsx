import { useState } from 'react';
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from 'next/navigation';
import { CircleFlag } from 'react-circle-flags';
import { ChevronDown } from 'lucide-react';

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // const handleLocaleChange = (newLocale: string) => {
    //     const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    //     router.push(newPath);
    //     console.log(newPath);
    //     setIsOpen(false);
    // };

    const handleLocaleChange = (newLocale: string) => {
        const currentLocale = `/${locale}`;
        let newPath = pathname;

        if (pathname.startsWith(currentLocale)) {
            newPath = pathname.replace(currentLocale, `/${newLocale}`);
        } else {
            newPath = `/${newLocale}${pathname}`;
        }

        // console.log(`Changing locale from ${locale} to ${newLocale}. New path: ${newPath}`);
        router.push(newPath);
        setIsOpen(false);
    };


    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between space-x-2 p-2 bg-white border border-gray-300 rounded focus:outline-none w-full"
            >
                <div className="flex items-center gap-1">
                    <CircleFlag countryCode={locale === 'en' ? 'us' : 'es'} style={{ width: '24px', height: '24px' }} />
                    <span>{locale === 'en' ? 'English' : 'Español'}</span>
                </div>
                <ChevronDown className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-full bg-white border border-gray-300 shadow-lg rounded">
                    {routing.locales.map((cur) => (
                        <div
                            key={cur}
                            onClick={() => handleLocaleChange(cur)}
                            className="flex items-center p-2 cursor-pointer group hover:bg-[#ff9302]"
                        >
                            <CircleFlag countryCode={cur === 'en' ? 'us' : 'es'} style={{ width: '24px', height: '24px' }} />
                            <span className="ml-2 group-hover:text-white">
                                {t('locale', { locale: cur })}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
