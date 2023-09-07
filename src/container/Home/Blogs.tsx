"use client";

import { blog1, blog2, blog3, wave_fill } from "@/assets"
import { img_6 } from "@/assets/images/gallery/annual-day";
import { music_2 } from "@/assets/images/music";
import { swim_2 } from "@/assets/images/health-wellbeing";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from "next/image"

import '@splidejs/splide/css';

function Blogs(){
    const blogs = [
        {
            "image": img_6,
            "name": "ANNUAL DAY CELEBRATION",
            "date": "12/01/2023",
        },
        {
            "image": music_2,
            "name": "MUSIC COMPETITION",
            "date": "15/03/2023",
        },
        {
            "image": swim_2,
            "name": "SPORTS DAY",
            "date": "25/03/2023",
        },
    ]
    return (
        <section className="section-container">
            <h2 className="uppercase text-heading-5 md:text-heading-3">WHAT'S HAPPENING IN SCHOOL</h2>
            <div className="w-fit relative">
                <h4 className="text-heading-4 md:text-8xl opacity-10">BLOGS</h4>
                <div className="absolute w-full h-full top-0 right-0">
                    <Image src={wave_fill} className="max-w-[112px] absolute w-1/2 top-1/2 -translate-y-1/2 left-[20%]" alt="Wave Image" />
                </div>
            </div>
            <Splide className="mt-md gap-xl" options={{
                autoWidth: true,
                arrows: false,
                pagination: false,
                gap: "2.6rem"
            }}>
                {blogs.map((item, index) => (
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

export default Blogs