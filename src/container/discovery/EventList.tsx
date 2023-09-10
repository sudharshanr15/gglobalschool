"use client";
import { useState, useEffect } from "react";
import { EventCard, Slide } from "@/container/discovery";
import * as fieldVist from '@/assets/images/gallery/field-trip'
import * as gustTalk from '@/assets/images/gallery/gust-talk'
import * as annualDay from '@/assets/images/gallery/annual-day'
import * as teachers from "@/assets/images/gallery/teacher"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

const Gallery:any={
        "Student Gallery":{
            'Field Vist' : [...Object.values(fieldVist)],
            'Gust Talk' : [...Object.values(gustTalk)],
            'Annual Day' : [...Object.values(annualDay)],
        },
        "Teacher Gallery":{
            'Teachers' : [...Object.values(teachers)],
        }
    }

const Listofevents = () => {

    const [activeGallery, setActiveGallery] = useState("Student Gallery");
    const [activeCategory, setActiveCategory] = useState(Object.keys(Gallery[activeGallery])[0])
    const [slider, setSlider] = useState(false);

    return (
        <>
            <div className="">
                <div className="flex justify-around w-100 border-green flex-wrap md:flex-nowrap xl:gap-2xl">
                    {Object.keys(Gallery).map((item) => (
                        <div>
                            <p
                                onClick={() =>{setActiveGallery(item); setActiveCategory(Object.keys(Gallery[item])[0])}}
                                className={`cursor-pointer	 text-primary-maroon-1 bold md:text-heading-6 xl:text-heading-5 font-bold`}>
                                {item}
                            </p>
                            {(item == activeGallery) && (
                                <div className="w-8/12 rounded-full mx-auto border-2 border-primary-yellow-1 lg:h-[6px] bg-primary-yellow-1"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-xl md:mt-2xl">
                {activeGallery.toLowerCase() == "student gallery" ? (
                    <p className="font-body">
                        Field trips provide opportunities for learner’s to
                        understand the real life challenges and it’s solutions. It
                        helps them to reflect their conceptual understandings and
                        broaden their thinking.
                        <br />
                        <br />
                        It provides hands-on experiential learning opportunity in a
                        real world context. Field trips develop empathy, tolerance,
                        critical thinking skills and perceiving things in different
                        ways.
                        <br />
                        <br />
                        They are able to engage with content in a variety of ways.
                        Each experience solidifies the learning and support
                        important academic concepts.
                    </p>
                ) : (
                    <p className="font-body">
                        GGS fosters professional development for teachers to enhance their
                        approaches to teaching in order to meet the student's need. Our facilitator
                        team collaborate with each other to share their learning through authentic
                        PD sessions.
                        <br/>
                        <br/>
                        And also to focus on purposeful progress towards significant
                        teaching methodologies. We work together to create a hassle free
                        curriculum to ensure all students achieve success.
                        <br/>
                        <br/>
                        Being life long learners,
                        our facilitators share the best practices implemented in the classroom with
                        other teachers to discover and explore new ideas in the world of learning.
                    </p>
                )}
            </div>
            <div className="mt-8">
                <div className="lg:hidden">
                    <Swiper  className=" " breakpoints={{1080:{slidesPerView:4}}} slidesPerView={1.6} freeMode={true} spaceBetween={20} modules={[FreeMode]}>
                        {
                        Object.entries(Gallery[activeGallery]).map(([key,value])=>(
                            <SwiperSlide 
                                className={`py-2 px-4 text-center border-primary-maroon-1 border rounded-lg font-semibold text-primary-maroon-1 ${(key===activeCategory)&&'bg-primary-maroon-1 text-white'} `}
                                onClick={()=>setActiveCategory(key)}
                            >
                                {key}
                            </SwiperSlide>    
                        )) 
                        }
                    </Swiper>
                </div>
                <ul className="hidden lg:flex gap-x-12 gap-y-4 flex-wrap">
                    {
                        Object.entries(Gallery[activeGallery]).map(([key,value])=>(
                            <li 
                                className={`cursor-pointer py-2 px-8 text-center border-primary-maroon-1 border rounded-lg font-semibold text-primary-maroon-1 ${(key===activeCategory)&&'bg-primary-maroon-1 text-white'} `}
                                onClick={()=>setActiveCategory(key)}
                            >
                                {key}
                            </li>    
                        )) 
                    }
                </ul>
            </div>
            <div className="my-4">
                <div className="flex flex-wrap gap-y-4 lg:gap-x-4 ">
                        {Gallery[activeGallery][activeCategory].map((val: any, index: number) => {
                            return (
                                <div className="lg:basis-[32%]">
                                    <EventCard
                                        setSlider={setSlider}
                                        key={index}
                                        image={val}
                                        />
                                </div>
                            );
                        })}
                </div>
            </div>
            {slider && (
                <Slide
                    gallery_name={activeGallery}
                    gallery_images={Gallery[activeGallery][activeCategory]}
                    setSlider={setSlider}
                />
            )}
        </>
    );
};

export default Listofevents;
