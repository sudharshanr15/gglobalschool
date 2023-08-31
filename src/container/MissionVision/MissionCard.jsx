import React from "react";
import Image from "next/image";

function MissionCards({ cardImage, title, desc, iswide }) {
    return (
            <section className="">
                <div className="w-full aspect-auto md:aspect-video overflow-hidden">
                    <Image
                        src={cardImage}
                        alt="image"
                        unoptimized
                        className="w-full h-auto object-contain"
                    />
                </div>
                <div className="p-md">
                    <p className="text-primary-orange-1 font-bold text-heading-5 mb-large uppercase">
                        {title}
                    </p>
                    <p className="text-body">{desc}</p>
                </div>
            </section>
    );
}

export default MissionCards;
