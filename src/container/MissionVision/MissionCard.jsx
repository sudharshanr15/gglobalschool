import React from "react";
import Image from "next/image";

function MissionCards({ cardImage, title, desc, iswide }) {
    return (
            <section className="my-3xl sm:mt-0">
                <Image
                    src={cardImage}
                    alt="image"
                    unoptimized
                    className=" min-w-[400px]  h-[370px] object-cover"
                />
                <div className=" py-large px-large">
                    <p className="text-primary-orange-1 font-bold text-heading-5 mb-large uppercase">
                        {title}
                    </p>
                    <p className="text-body">{desc}</p>
                </div>
            </section>
    );
}

export default MissionCards;
