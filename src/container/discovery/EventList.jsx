"use client";
import { Slide } from ".";
import Image from "next/image";
import { useState } from "react";
import close from "../../assets/close.png"
import Link from "next/link";

const EventList = () => {
    const [gallery, setGallery] = useState(false);
    const events = [
        "Fathers Day",
        "International yoga day",
        "International mud day",
        "National doctors day",
        "World chocolate day",
        "Investiture ceremony",
        "International friendship day and twins day",
        "Independence Day",
        "Krishna Jayanthi and photography day",
        "Vinayak Chaturthi",
        "Teachers day and Onam",
        "International literacy day",
        "Grand parents day",
        "Dot day",
        "GGS Book fair",
        "Navarathri begins",
        "Vijayadashami",
        "Sports day",
        "Diwali",
        "Halloween day",
        "GGS Art competition",
        "Children’s day",
        "World heritage week",
        "Thanks giving day",
        "Math expo",
        "Christmas and new year celebration",
        "Pongal celebration",
        "Republic Day",
        "4th GGS kiddathon",
        "DEAR WEEK",
        "International mother language day",
        "GGS SANGAMAM",
        "International women’s day",
        "Art exhibition",
        "Annual day  graduation",
        "PYP Exhibition",
    ];
    const Eventcard = ({ title }) => {
        return (
            <div className="w-full h-fit bg-gray-100">
                <div className="relative h-40">
                    <Image
                        src={"/eventsimg/" + title + ".png"}
                        className="w-full h-full"
                        width={200}
                        height={200}
                        alt={title}
                    />
                    <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden opacity-0 transition duration-700 ease-in-out hover:opacity-100 text-center">
                        <div className="relative w-full h-full">
                            <Image
                                src={"/eventsimg/DEAR WEEK.png"}
                                className="z-1 absolute brightness-50 w-full h-full"
                                width={200}
                                height={200}
                                alt={title}
                            />
                            <div className="absolute  inset-0 flex items-center justify-center">
                                <Link href="#eventlist">
                                    <button
                                        onClick={() => {
                                            setGallery(true);
                                        }}
                                        className=" w-fit h-fit bg-primary-yellow-1 z-2 hover:bg-white rounded-full text-xl font-bold lg:text-heading-6 py-4 px-md lg:px-large"
                                    >
                                        View Gallery
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="p-md font-bold">{title}</p>
            </div>
        );
    };
    const content = events.map((val) => {
        return <Eventcard title={val} />;
    });

    return (
        <section className="section-container relative" id="eventlist">
            <p className="text-heading-4 text-primary-maroon mb-large">
                LIST OF DAYS & EVENTS -2023
            </p>
            <div className="lg:my-xl grid gap-md lg:gap-2xl grid-cols-2 lg:grid-cols-4">
                {content}
            </div>
            {gallery ? (
                <div className=" absolute inset-0  bg-black bg-opacity-90 w-full  z-10">
                    <Image
                        onClick={(event) => {
                            setGallery(false);
                        }}
                        src={close}
                        className=" md:w-28 w-16 absolute right-5 top-5 z-20"
                    />
                    <Slide />
                </div>
            ) : (
                <></>
            )}
        </section>
    );
};

export default EventList;
