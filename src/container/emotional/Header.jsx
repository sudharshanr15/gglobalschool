import React from "react";
import Image from "next/image";

function Header({ title, content, img, rev }) {
    return (
        <section
            className={`section-container md:flex md:gap-3xl ${
                rev ? "md:flex-row-reverse" : "md:flex-row"
            }`}
        >
            <div className="mb-large md:w-[55%]">
                <p className="text-heading-3 text-primary-maroon-1 mb-large">
                    {title}
                </p>
                <p className="text-body">{content}</p>
            </div>

            <Image
                src={img}
                alt="mission"
                unoptimized
                className="md:max-w-[580px] w-full"
            />
        </section>
    );
}

export default Header;