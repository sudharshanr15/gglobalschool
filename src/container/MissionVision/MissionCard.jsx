import React from "react";
import Image from "next/image";

function MissionCards({ cardImage, title, desc, iswide }) {
    return (
        <>
            <div className="my-20 sm:mt-0 ">
                <Image
                    src={cardImage}
                    alt="image"
                    unoptimized
                    className=" max-w-[425px]  max-h-[430px]"
                />
                <div className=" py-10 px-5">
                    <p className="text-primary-orange-1 font-bold text-heading-5 mb-5 ">
                        {title}
                    </p>
                    <p className="text-body">{desc}</p>
                </div>
            </div>
        </>
    );
}

export default MissionCards;
