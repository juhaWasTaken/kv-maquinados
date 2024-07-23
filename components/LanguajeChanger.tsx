'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import React, { ChangeEvent } from 'react';

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>,) => {
        const newLocale = e.target.value;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };

    return (
        <select className='uppercase px-3 py-3 bg-white hover:bg-[#FF9302] hover:text-white md:hover:bg-transparent md:hover:text-[#ff9302] md:p-0 font-semibold text-sm' onChange={handleChange} value={currentLocale} >
            <option className='font-sans font-semibold' value="en">ENG</option>
            <option className='font-sans font-semibold' value="es">ESP</option>
        </select>
    );
}
