// 'use client';

// import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation';
// import { useTranslation } from 'react-i18next';
// import i18nConfig from '@/i18nConfig';
// import React, { ChangeEvent } from 'react';
// import { US } from 'country-flag-icons/react/3x2'

// export default function LanguageChanger() {
//     const { i18n } = useTranslation();
//     const currentLocale = i18n.language;
//     const router = useRouter();
//     const currentPathname = usePathname();

//     const handleChange = (e: ChangeEvent<HTMLSelectElement>,) => {
//         const newLocale = e.target.value;

//         //set cookie for next - i18n - router
//         const days = 30;
//         const date = new Date();
//         date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//         const expires = date.toUTCString();
//         document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

//         //redirect to the new locale path
//         if (
//             currentLocale === i18nConfig.defaultLocale &&
//             !i18nConfig.prefixDefault
//         ) {
//             router.push('/' + newLocale + currentPathname);
//         } else {
//             router.push(
//                 currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
//             );
//         }

//         router.refresh();
//     };

//     return (
//         <select className='uppercase px-3 py-3 bg-white hover:bg-[#FF9302] hover:text-white md:hover:bg-transparent md:hover:text-[#ff9302] md:p-0 font-semibold text-sm' onChange={handleChange} value={currentLocale} >
//             <option className='font-sans font-semibold' value="en">
//                 EN
//             </option>
//             <option className='font-sans font-semibold' value="es">
//                 ES
//             </option>
//         </select>
//     );
// }

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { CircleFlag } from 'react-circle-flags';

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (newLocale: string) => {
        // Set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/;SameSite=None;Secure`;

        // Redirect to the new locale path
        if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
        }

        router.refresh();
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between space-x-2 p-2 bg-white border border-gray-300 rounded focus:outline-none  w-full"
            >
                <div className="flex items-center gap-1">
                    <CircleFlag
                        countryCode={currentLocale === 'en' ? 'us' : 'es'}
                        style={{ width: '24px', height: '24px' }}
                    />
                    <span>{currentLocale === 'en' ? 'English' : 'Español'}</span>
                </div>
                <svg
                    className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-full bg-white border border-gray-300 shadow-lg">
                    <div
                        onClick={() => handleChange('en')}
                        className="flex items-center p-2  cursor-pointer group hover:bg-[#ff9302]"
                    >
                        <CircleFlag countryCode="us" style={{ width: '24px', height: '24px' }} />
                        <span className="ml-2 group-hover:text-white">English</span>
                    </div>
                    <div
                        onClick={() => handleChange('es')}
                        className="flex items-center p-2  cursor-pointer group hover:bg-[#ff9302]"
                    >
                        <CircleFlag countryCode="es" style={{ width: '24px', height: '24px' }} />
                        <span className="ml-2 group-hover:text-white">Español</span>
                    </div>
                </div>
            )}
        </div>
    );
}



