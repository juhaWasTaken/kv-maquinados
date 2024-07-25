import Image from "next/image"
import actaris from "../../assets/images/logos/actaris.svg"
import carecredit from "../../assets/images/logos/carecredit.svg"
import constructor from "../../assets/images/logos/constructor.svg"
import eiffage from "../../assets/images/logos/eiffage.svg"
import fisher from "../../assets/images/logos/fisher.svg"
import fresenius from "../../assets/images/logos/fresenius.svg"
import genie from "../../assets/images/logos/genie.svg"
import topcon from "../../assets/images/logos/topcon.svg"

export function LogoSlider({className=""}) {
    const logos = [
        { src: actaris, alt: 'Actaris Logo' },
        { src: carecredit, alt: 'Care Credit Logo' },
        { src: constructor, alt: 'Constructor Logo' },
        { src: eiffage, alt: 'Eiffage Logo' },
        { src: fisher, alt: 'Fisher Logo' },
        { src: fresenius, alt: 'Fresenius Logo' },
        { src: genie, alt: 'Genie Logo' },
        { src: topcon, alt: 'Topcon Logo' },
    ];
    return (
        <div className={`relative overflow-hidden mx-auto max-w-[1280px] ${className}`}>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
                <div className="flex space-x-10 animate-slide hover:pause">
                    {logos.map((logo, index) => (
                        <Image
                            key={index}
                            className="inline-block"
                            src={logo.src}
                            width={150}
                            height={150}
                            alt={logo.alt}
                            quality={100}
                            priority
                        />
                    ))}
                    {logos.map((logo, index) => (
                        <Image
                            key={index + logos.length}
                            className="inline-block"
                            src={logo.src}
                            width={150}
                            height={150}
                            alt={logo.alt}
                            quality={100}
                            priority
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}