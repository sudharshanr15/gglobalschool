"use client";
import { useState, useEffect } from "react";
import { EventCard, Slide } from "@/container/discovery";
import * as student_gallery from "@/assets/images/gallery/student"
import * as teacher_gallery from "@/assets/images/gallery/teacher"

const Listofevents = () => {
    const [gallery, setGallery] = useState("Student Gallery");
    const [slider, setSlider] = useState(false);
    const gallery_images: any = {
        "Student Gallery": [...Object.values(student_gallery)],
        "Teacher Gallery": [...Object.values(teacher_gallery)],
    };
    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-wrap md:flex-nowrap gap-large xl:gap-2xl">
                    {Object.keys(gallery_images).map((item, index) => (
                        <p
                            key={index}
                            onClick={() => setGallery(item)}
                            className={`text-primary-maroon-1 text-heading-5 lg:text-heading-3 font-bold decoration-8 underline-offset-[1rem] decoration-primary-yellow-1 ${
                                item == gallery ? "underline" : ""
                            }`}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>
            <div className="mt-xl md:mt-2xl">
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
            </div>
            <div className="mt-xl md:mt-2xl grid gap-md xl:gap-xl grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {gallery_images[gallery].map((val: any, index: number) => {
                    return (
                        <EventCard
                            setSlider={setSlider}
                            key={index}
                            image={val}
                        />
                    );
                })}
            </div>
            {slider && (
                <Slide
                    gallery_name={gallery}
                    gallery_images={gallery_images[gallery]}
                    setSlider={setSlider}
                />
            )}
        </>
    );
};

export default Listofevents;
