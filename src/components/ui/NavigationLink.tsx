'use client';

import { usePathname } from 'next/navigation'; // Cambia a la API de Next.js
import { ComponentProps } from 'react';
import { Link } from '@/i18n/routing';

export default function NavigationLink({
    href,
    ...rest
}: ComponentProps<typeof Link>) {
    const pathname = usePathname(); // Obtiene el pathname completo
    const isActive = pathname === href; // Compara el pathname completo
    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            href={href}
            className={`nav-link ${isActive ? 'nav-link-active' : 'nav-link'}`}
            {...rest}
        />
    );
}
