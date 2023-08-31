'use client';

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import img from '@/assets/Rectangle 75.png'
import { useEffect, useState } from "react";
import {group} from "@/assets/images/work-with-us";
import {sports} from "@/assets/images/health-wellbeing";
import {pyp} from "@/assets/images/curriculum";
import {design_thinking} from "@/assets/images/life-at-ggs";
import {story_1} from "@/assets/images/our-story";
import {support_1} from "@/assets/images/emotional-support";
import {agency_1} from "@/assets/images/student-agency";
import {leadership_1} from "@/assets/images/student-leadership";

function TopicCard({ name, img, href}: {
    name: string,
    img: StaticImageData,
    href: string
}){
    return (
        <div className="relative w-full">
            <div className="aspect-video overflow-hidden">
                <Image
                    src={img}
                    alt="checked"
                    className="h-full w-full object-cover"
                    unoptimized
                />
            </div>
            <div className="bg-primary-maroon-1 text-center">
                <p className="text-white uppercase text-heading-5 p-large">
                    {name}
                </p>
            </div>
            <div className="absolute flex flex-col justify-center text-center items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary-maroon-1 opacity-0 transition duration-700 ease-in-out hover:opacity-100">
                <p className="text-white text-heading-5 uppercase mb-md">
                    {name}
                </p>
                <Link href={href ?? ""} className="bg-white rounded-full text-subheading py-2 lg:py-md md:py-md px-xl lg:px-3xl md:px-3xl ">
                    View
                </Link>
            </div>
        </div>
    )
}

function ExploreTopics() {
    const links = [
        {
            name: "GGS Story",
            href: "/our-story",
            img: story_1,
        },
        {
            name: "Mission & Values",
            href: "/mission",
            img: img,
        },
        {
            name: "Student Agency",
            href: "/student-agency",
            img: agency_1,
        },
        {
            name: "Primary programmes @ GGS",
            href: "/eyp",
            img: pyp,
        },
        {
            name: "Emotion & Ethical Support",
            href: "/emotional",
            img: support_1,
        },
        {
            name: "Studios @ GGS",
            href: "/life-at-ggs",
            img: design_thinking,
        },
        {
            name: "Student Leadership",
            href: "/student-council",
            img: leadership_1,
        },
        {
            name: "Health & Well being",
            href: "/awakening-creativity",
            img: sports,
        },
        {
            name: "Work with Us",
            href: "/work-with-us",
            img: group,
        }
    ]

    const [num1, setNum1] = useState(-1);
    const [num2, setNum2] = useState(-1);

    useEffect(() => {
        let check_num1 = Math.round(Math.random() * (links.length - 1))
        setNum1(check_num1)
        let check_num2 = Math.round(Math.random() * (links.length - 1))
        while(check_num1 == check_num2){
            check_num2 = Math.round(Math.random() * (links.length - 1))
        }
        setNum2(check_num2)
    }, [])


    return (
        <section className="section-container">
            <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-xl">
                OTHER TOPICS TO EXPLORE
            </h2>
            <div className="flex flex-col md:flex-row gap-xl">
                {[num1, num2].map((item: number, index: number) => (
                    <TopicCard {...links[item]} key={index} />
                ))}
            </div>
        </section>
    );
}

export default ExploreTopics;
