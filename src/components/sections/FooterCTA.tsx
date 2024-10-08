import { useTranslations } from "next-intl"
import { Rajdhani } from "next/font/google"
import { Link } from "@/i18n/routing"

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' })

export function FooterCTA({ className = "" }) {
  const t = useTranslations('footerCTA')
  return (
    <section className={`${className} parallax-section2 `}>
      <div className="flex flex-col lg:flex-row gap-3 items-center justify-between max-w-[1280px] mx-auto relative py-12 md:px-5 lg:px-3">
        <h2 className={`${rajdhani.className} text-[31px] md:text-[38px] lg:text-[46px] text-white text-center `}>
          {t('text')}
          <span className="text-[#ff9302]">.</span>
        </h2>
        <div className="flex flex-col w-full text-center md:w-fit lg:flex-row gap-3 px-3">
          <Link href="/contact"
            className={`bg-[#ff9302] text-lg text-white py-2 px-6 flex items-center justify-center hover:bg-[#13213C] hover:text-[#ff9302] transition-colors duration-300 ${rajdhani.className}`}>
            {t('button-1')}
          </Link>
          <Link href="/portfolio"
            className={`bg-transparent border-[2px] text-lg border-[#ff9302] text-white py-2 px-6 flex items-center justify-center hover:bg-white hover:border-white hover:text-[#ff9302] transition-colors duration-300 ${rajdhani.className}`}>
            {t('button-2')}
          </Link>
        </div>
      </div>
    </section>
  )
}