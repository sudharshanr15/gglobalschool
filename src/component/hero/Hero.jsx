import React from "react";
import hero from "../../assets/offer3.jpg";
import Image from "next/image";
import styles from "./styles.module.css";

function Hero({ title }) {
    return (
        <div className={"w-full relative min-h-[576px] " + styles.hero}>
            <div className="inset-0 opacity-60">
                <Image
                    src={hero}
                    alt="hero"
                    unoptimized
                    className="object-cover md:max-h-[576px] min-h-[576px]"
                />
            </div>
            <p className="lg:text-heading-1 text-heading-3 text-white p-large md:p-2xl uppercase absolute top-1/2 -translate-y-1/2">
                {title}
            </p>
        </div>
    );
}

export default Hero;
