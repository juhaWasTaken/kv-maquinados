import "./globals.css";
import type { Metadata } from "next";
import { dir } from 'i18next';
import { Rubik } from "next/font/google";
import { Toaster } from "react-hot-toast";
import i18nConfig from "@/i18nConfig";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KV Servicios Proyectos y Maquinados Industriales",
  description: "Somos una empresa dedicada a la calibración, mantenimiento y suministros industriales, con más de 10 años de experiencia en la industria maquiladora y de proyectos de construcción. Ofrecemos servicios como instalaciones eléctricas, mecánicas, soldadura, sistemas de refrigeración, y fabricación estructural de acero.",
  keywords: [
    "maquinados industriales",
    "servicios industriales",
    "mantenimiento industrial",
    "maquinados",
    "calibración",
    "servicios",
    "mantenimiento",
    "soldadura",
    "instalaciones eléctricas",
    "fabricación de acero",
    "grúas viajeras",
    "reynosa",
    "KV Maquinados"
  ],
  authors: [{ name: "KV Maquinados" }],
  openGraph: {
    title: 'KV Servicios Proyectos y Maquinados Industriales',
    description: 'Empresa líder en calibración, mantenimiento y suministros industriales, con servicios especializados en la industria maquiladora y de proyectos de construcción.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://kvmaquinados.com',
    siteName: 'KV Servicios Proyectos y Maquinados Industriales',
  }
};

// Define the type for the params
interface Params {
  locale: string;
}

export function generateStaticParams(): Params[] {
  return i18nConfig.locales.map(locale => ({ locale }));
}

// Define the props type for RootLayout
interface RootLayoutProps {
  children: React.ReactNode;
  params: Params;
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={rubik.className}>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
