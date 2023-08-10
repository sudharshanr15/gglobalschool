import React from "react";
import hero from "../../assets/offer3.jpg";
import Image from "next/image";
import styles from "./styles.module.css";

function Hero({ title }) {
    return (
        <div className={" w-full relative min-h-[576px]    " + styles.hero}>
            <div className="inset-0 opacity-60">
                <Image
                    src={hero}
                    alt="hero"
                    unoptimized
                    className="object-cover md:max-h-[576px] min-h-[576px]"
                />
            </div>
            <p className="md:text-heading-1 text-heading-2 text-white uppercase absolute top-3xl md:top-[50%] md:left-2xl ">
                {title}
            </p>
        </div>
    );
}

export default Hero;
