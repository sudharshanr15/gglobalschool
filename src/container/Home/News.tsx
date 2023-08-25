"use client";

import { blog1, blog2, blog3, wave_fill } from "@/assets"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from "next/image"

import '@splidejs/splide/css';

function News(){
    const news = [
        {
            "image": blog1,
            "name": "ANNUAL DAY CELEBRATION",
            "date": "12/01/2023",
        },
        {
            "image": blog2,
            "name": "MUSIC COMPETITION",
            "date": "15/03/2023",
        },
        {
            "image": blog2,
            "name": "SPORTS DAY",
            "date": "25/03/2023",
        },
    ]
    return (
        <section className="section-container">
            <h2 className="uppercase text-heading-5 md:text-heading-3">NEWS & EVENTS</h2>
            <div className="w-fit relative">
                <h4 className="text-heading-4 md:text-8xl opacity-10">NEWS ROOM</h4>
                <div className="absolute w-full h-full top-0 right-0">
                    <Image src={wave_fill} className="max-w-[112px] absolute w-1/2 top-1/2 -translate-y-1/2 left-[10%]" alt="Wave Image" />
                </div>
            </div>
            <Splide className="mt-md gap-xl" options={{
                autoWidth: true,
                arrows: false,
                pagination: false,
                gap: "2.6rem"
            }}>
                {news.map((item, index) => (
                    <SplideSlide className="relative w-full sm:max-w-[32rem] max-h-[25rem]" key={index}>
                        <Image src={item.image} alt="Blog Events image" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 w-full bg-gradient-to-t from-gray-900 to-transparent">
                            <div className="py-large px-xl text-white">
                                <h3 className="uppercase text-heading-6 mb-large">{item.name}</h3>
                                <p className="text-body">{item.date}</p>
                            </div>
                        </div>
                        <div className="bg-primary-yellow absolute top-0 right-0 p-md text-subheading">
                            <span className="text-gray-900">Coming Soon</span>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </section>
    )
}

export default News