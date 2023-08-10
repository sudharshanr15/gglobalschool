import React from "react";
import Image from "next/image";

function StudioCards({ img, text1, text2, text3, isReversed }) {
    return (
        <div
            className={`w-full  flex flex-col ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
            } md:mt-7 p-large gap-large md:gap-[117px]`}
        >
            <div className="w-full md:w-[80%]">
                <p className="text-primary-maroon-1 font-normal text-heading-3  w-full md:w-[100%]">
                    {text1} <span className=" text-heading-3">STUDIO</span>
                </p>
                <div className="text-base font-normal leading-7 pt-md tracking-normal md:w-[100%] text-left">
                    <p className="pt-md">{text2}</p>
                    <p className="pt-md">{text3}</p>
                </div>
            </div>
            <div className="relative left-0 md:left-3 w-full md:w-[60%] ">
                <Image src={img} alt="logo" className=" w-[100%] h-[90%]" />
            </div>
        </div>
    );
}

export default StudioCards;
