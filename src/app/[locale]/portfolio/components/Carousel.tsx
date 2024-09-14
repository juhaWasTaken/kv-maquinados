import * as React from "react"
import { Rajdhani } from "next/font/google"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useTranslations } from "next-intl"


const rajdhani = Rajdhani({ subsets: ["latin"], weight: "700" })

export function CarouselSize() {

    const t = useTranslations("testimonials")

    const testimonials = [
        {
            testimonial: "testimonial.t1.text",
            name: "testimonial.t1.name",
            company: "testimonial.t1.company",
        },
        {
            testimonial: "testimonial.t2.text",
            name: "testimonial.t2.name",
            company: "testimonial.t2.company",
        },
        {
            testimonial: "testimonial.t3.text",
            name: "testimonial.t3.name",
            company: "testimonial.t3.company",
        },
        {
            testimonial: "testimonial.t4.text",
            name: "testimonial.t4.name",
            company: "testimonial.t4.company",
        },
        {
            testimonial: "testimonial.t5.text",
            name: "testimonial.t5.name",
            company: "testimonial.t5.company",
        },
    ]

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-full md:max-w-xs lg:max-w-md"
        >
            <CarouselContent>
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="lg:basis-1/2">
                        <div className="p-0 lg:p-4">
                            <Card className="h-full border-none shadow-none">
                                <CardContent className="flex flex-col justify-between p-0 h-full">
                                    <p className="text-sm md:text-[15px] lg:text-[18px] text-[#3a3a3a] mb-4 italic">{`"${t(testimonial.testimonial)}"`}</p>
                                    <div className="flex flex-col flex-grow">
                                        <p className={`${rajdhani.className} text-[17px] md:text-lg lg:text-[19px] font-bold`}>{t(testimonial.name)}</p>
                                        <p className="text-sm md:text-[15px] lg:text-base text-[#ff9302]">{t(testimonial.company)}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
