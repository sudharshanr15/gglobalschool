import React from "react";
import Image from "next/image";

function MissionCards({ cardImage, title, desc, iswide }) {
    return (
        <>
            <div className="my-20 sm:mt-0">
                <Image
                    src={cardImage}
                    alt="image"
                    unoptimized
                    className=" min-w-[400px]  h-[370px] object-cover"
                />
                <div className=" py-10 px-5">
                    <p className="text-primary-orange-1 font-bold text-heading-5 mb-5 uppercase">
                        {title}
                    </p>
                    <p className="text-body">{desc}</p>
                </div>
            </div>
        </>
    );
}

export default MissionCards;
