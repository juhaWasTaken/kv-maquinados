import Image from "next/image"
import { Rajdhani } from "next/font/google"
import testimonials from '../../../../assets/images/testimonials.png'
import { CarouselSize } from "../components/Carousel"
import { useTranslations } from "next-intl";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

export function TestimonialsPortfolio({ className = "" }) {

    const t = useTranslations('testimonials');

    return (
        <section className={`${className} max-w-[1280px] mx-auto `}>
            <div className="flex flex-col md:justify-between md:flex-row gap-5 mx-5 border-[15px] border-[#f5f5f5] overflow-hidden max-h-fit ">
                <div className="pt-6 px-5 md:pr-0 md:pl-[30px] lg:pl-8">
                    <p className="text-xs md:text-sm lg:text-[15px] uppercase tracking-widest font-medium text-[#13213C]">{t('section')}</p>
                    <h2 className={`${rajdhani.className} font-bold text-[#13213C] text-[31px] md:text-[38px] lg:text-[46px] mb-5`}>{t('title')}</h2>
                    <CarouselSize  />
                </div>
                <div className="flex justify-center items-center h-[300px] md:h-[350px] lg:h-[470px] ">
                    <div className="max-w-[700px] h-full">
                        <Image
                            src={testimonials}
                            alt="testimonials"
                            className="w-auto h-full object-contain"
                            width={700}  // Set this to the original width of your image
                            height={470} // Set this to the original height of your image
                            priority
                            style={{objectFit:"cover"}}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}