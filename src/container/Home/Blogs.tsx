"use client";

import { blog1, blog2, blog3 } from "@/assets"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from "next/image"

import '@splidejs/splide/css';

function Blogs(){
    const blogs = [
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
            <h2 className="uppercase text-heading-5 md:text-heading-3">WHAT HAPPENING IN THE SCHOOL</h2>
            <h4 className="text-heading-4 md:text-8xl opacity-10">BLOGS</h4>
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
                    </SplideSlide>
                ))}
            </Splide>
        </section>
    )
}

export default Blogs