import React from "react";
import img from '@/assets/Rectangle 75.png'
import Image from "next/image";
import Link from "next/link";

function TopicCard({ text, link }) {
    return (
        <>
            <div className="relative w-full">
                <Image
                    src={img}
                    alt="checked"
                    className="w-full"
                    unoptimized
                />
                <div className="bg-primary-maroon-1 text-center">
                    <p className="text-white uppercase text-heading-5 p-xl">
                        {text}
                    </p>
                </div>
                <div className="absolute flex flex-col justify-center text-center items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary-maroon-1 opacity-0 transition duration-700 ease-in-out hover:opacity-100">
                    <p className="text-white text-heading-5 uppercase mb-md">
                        {text}
                    </p>
                    <Link href={link ?? ""} className="bg-white rounded-full text-subheading py-2 lg:py-md md:py-md px-xl lg:px-3xl md:px-3xl ">
                        View
                    </Link>
                </div>
            </div>
        </>
    );
}

export default TopicCard;
