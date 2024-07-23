'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/app/i18n';
import { createInstance, i18n as I18nInstance } from 'i18next';
import React, { ReactNode, useEffect, useState } from 'react';

interface TranslationsProviderProps {
    children: ReactNode;
    locale: string;
    namespaces: string[];
    resources?: Record<string, any>;
}

const TranslationsProvider: React.FC<TranslationsProviderProps> = ({
    children,
    locale,
    namespaces,
    resources,
}) => {
    const [i18n, setI18n] = useState<I18nInstance | null>(null);

    useEffect(() => {
        const instance = createInstance();
        initTranslations({ locale, namespaces, i18nInstance: instance, resources }).then(() => {
            setI18n(instance);
        });
    }, [locale, namespaces, resources]);

    if (!i18n) {
        return null; // Or a loading spinner
    }

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
