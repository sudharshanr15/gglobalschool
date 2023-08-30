import React from "react";
import Image from "next/image";

function Header({ title, content, img, rev=false }) {
    return (
        <section
            className={`section-container flex gap-large md:gap-xl flex-col items-center ${rev ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
            <div className="mb-large w-full md:w-[50%]">
                <h2 className="text-heading-3 text-primary-maroon-1 mb-large">
                    {title}
                </h2>
                <p className="text-body">{content}</p>
            </div>

            <div className="w-full md:w-1/2">
                <Image
                    src={img}
                    alt="mission"
                    unoptimized
                    className="h-auto w-full object-contain max-h-[38rem]"
                />
            </div>
        </section>
    );
}

export default Header;
