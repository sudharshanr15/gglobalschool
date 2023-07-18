import React from "react";
import img from "../../assets/Rectangle 75.png";
import Image from "next/image";

function TopicCard({ text, overlayText }) {
    return (
        <>
            <div className=" relative mt-20 md:mt-0 md:w-[50%]">
                <Image
                    src={img}
                    alt="checked"
                    className="w-[100%]"
                    unoptimized
                />
                <div className="bg-primary-maroon-1">
                    <p className="text-white uppercase text-heading-5 p-5">
                        {text}
                    </p>
                </div>
                <div class="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary-maroon-1 opacity-0 transition duration-700 ease-in-out hover:opacity-100 text-center">
                    <p className="text-white text-heading-5 uppercase p-5">
                        {overlayText}
                    </p>
                    <button className="bg-white rounded-full text-heading-6 py-4 px-20 ">
                        View
                    </button>
                </div>
            </div>
        </>
    );
}

export default TopicCard;
