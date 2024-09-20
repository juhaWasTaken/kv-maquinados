'use client';

import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import { Link } from '@/i18n/routing';

function removeLocalePrefix(pathname: string) {
    const segments = pathname.split('/');
    if (segments[1] === 'en' || segments[1] === 'es') {
        // Remove the first segment (locale prefix)
        return '/' + segments.slice(2).join('/');
    }
    return pathname;
}

export default function NavigationLink({
    href,
    ...rest
}: ComponentProps<typeof Link>) {

    const pathname = usePathname();
    const normalizedPathname = removeLocalePrefix(pathname); // Remove locale prefix
    const normalizedHref = removeLocalePrefix(href as string); // Normalize href as well
    const isActive = normalizedPathname === normalizedHref || (normalizedHref === '/' && normalizedPathname === '/');

    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            href={href}
            className={`nav-link ${isActive ? 'nav-link-active' : 'nav-link'}`}
            {...rest}
        />
    );
}
