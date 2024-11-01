import { Clock, Phone, Mail, MapPinIcon } from "lucide-react"
import { Rajdhani } from "next/font/google"
import { Link } from "@/i18n/routing"
import Image from "next/image"
import Isotipo from '@/assets/images/Isotipo.png'
import { useTranslations } from "next-intl"

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' })

export function Footer() {
  const t = useTranslations('footer')
  return (
    <>
      <footer className="bg-white pb-10">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Company Info */}
            <div className="flex flex-col gap-5 lg:gap-8 flex-1 items-start">
              <div className="flex items-center gap-1">
                <Link href='/' className="flex items-center uppercase font-bold text-lg hover:text-[#FF9302] text-wrap">
                  <Image src={Isotipo} alt="Logo KV Maquinados" className="w-auto h-auto" width={160} height={160} />
                </Link>
              </div>
              <p className="text-[#535353]">
                {t('phrase')}
              </p>
            </div>

            {/* Useful Links */}
            <div className="flex-1">
              <div className="mb-4">
                <h3 className={`${rajdhani.className} text-lg md:text-[21px] lg:text-[23px] font-semibold text-[#13213C] mb-2`}>{t('linksTitle')}</h3>
                <div className="h-[5px] w-[30px] md:w-[35px] lg:w-[40px] bg-[#ff9302]"></div>
              </div>
              <ul className="space-y-2">
                <li><Link href="/" className="text-[#535353] hover:text-[#ff9302] transition-colors">{t('nav.home')}</Link></li>
                <li><Link href="/about-us" className="text-[#535353] hover:text-[#ff9302] transition-colors">{t('nav.about_us')}</Link></li>
                <li><Link href="/services" className="text-[#535353] hover:text-[#ff9302] transition-colors">{t('nav.services')}</Link></li>
                <li><Link href="/portfolio" className="text-[#535353] hover:text-[#ff9302] transition-colors">{t('nav.portfolio')}</Link></li>
                <li><Link href="/contact" className="text-[#535353] hover:text-[#ff9302] transition-colors">{t('nav.contact')}</Link></li>
              </ul>
            </div>



            {/* Contact Info */}
            <div className="flex-1">
              <div className="mb-4">
                <h3 className={`${rajdhani.className} text-lg md:text-[21px] lg:text-[23px] font-semibold text-[#13213C] mb-2`}>{t('contactTitle')}</h3>
                <div className="h-[5px] w-[30px] md:w-[35px] lg:w-[40px] bg-[#ff9302]"></div>
              </div>
              <p className="text-[#535353]">{t('contact.address')}</p>
              <p className="text-[#535353] flex items-center mt-2">
                <span className="material-icons text-[#ff9302] mr-2">
                  <Clock fill="#ff9302" stroke="white" />
                </span>
                {t('contact.schedule')}
              </p>
              <a href="mailto:proyectos@kvmaquinados.com" className="text-[#535353] flex items-center mt-2 hover:text-[#ff9302] transition-colors break-all">
                <span className="material-icons text-[#ff9302] mr-2">
                  <Mail fill="#ff9302" stroke="white" />
                </span>
                proyectos@kvmaquinados.com
              </a>
              <p className="text-[#535353] flex items-center mt-2">
                <span className="material-icons text-[#ff9302] mr-2">
                  <Phone fill="#ff9302" stroke="white" />
                </span>
                +899 963 7644
              </p>
            </div>
          </div>
        </div>
      </footer>
      <section className="bg-[#13213C]">
        <div className="flex flex-col gap-1 md:flex-row items-center justify-between max-w-[1280px] mx-auto py-5 px-4">
          <p className="flex items-center text-xs md:text-sm text-center text-balance text-white gap-2 font-normal">
            <Clock className="w-4 h-4 text-orange-400" />
            {t('contact.schedule')}
          </p>
          <p className="flex items-center text-xs md:text-sm text-center text-balance text-white gap-2 font-normal">
            <MapPinIcon className="w-4 h-4 text-orange-400" />
            {t('contact.location')}
          </p>
        </div>
      </section>
    </>
  )
}