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

const rajdhani = Rajdhani({ subsets: ["latin"], weight: "700" })

const testimonials = [
    {
        testimonial: "We have been working with KV Maquinados for over 5 years and we are very satisfied with the quality of their work.",
        name: "John Doe",
        company: "Company",
    },
    {
        testimonial: "KV Maquinados has exceeded our expectations with their exceptional craftsmanship and attention to detail. We highly recommend their services.",
        name: "Jane Smith",
        company: "ABC Corporation",
    },
    {
        testimonial: "KV Maquinados is our go-to partner for all our machining needs. Their expertise and professionalism are unmatched.",
        name: "Sarah Johnson",
        company: "XYZ Manufacturing",
    },
    {
        testimonial: "We have been impressed with the speed and accuracy of KV Maquinados' work. They consistently deliver high-quality products on time.",
        name: "Michael Williams",
        company: "123 Industries",
    },
    {
        testimonial: "KV Maquinados has been instrumental in helping us optimize our manufacturing processes. Their innovative solutions have greatly improved our efficiency.",
        name: "Emily Davis",
        company: "Acme Engineering",
    },
]

export function CarouselSize() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-sm"
        >
            <CarouselContent>
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="lg:basis-1/2">
                        <div className="p-1">
                            <Card className="h-full border-none shadow-none">
                                <CardContent className="flex flex-col justify-between p-0 h-full">
                                    <p className="text-sm md:text-[15px] lg:text-[18px] text-[#3a3a3a] mb-4 italic">"{testimonial.testimonial}"</p>
                                    <div>
                                        <p className={`${rajdhani.className} text-[17px] md:text-lg lg:text-[19px] font-bold`}>{testimonial.name}</p>
                                        <p className="text-sm md:text-[15px] lg:text-base text-[#ff9302]">{testimonial.company}</p>
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
