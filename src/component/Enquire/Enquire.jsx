"use client";

import React from "react";
import EnquireLink from "./EnquireLink";

function Enquire() {
    return (
        <>
            <section className=" py-4 px-4 bg-primary-orange-1 enquire-section lg:py-12">
                <h2 className="text-center text-xl font-bold md:text-heading-5 text-white">
                    JOIN G GLOBAL
                </h2>
                <h3 className="text-center text-xl md:text-heading-4 text-white mt-2 font-bold">
                    TO SHAPE YOUR CHILD'S FUTURE
                </h3>
                <div className="flex justify-center items-center mt-md">
                    <button className="py-2 px-6 bg-primary-yellow-1 rounded-full font-semibold lg:py-3 lg:px-16 lg:text-xl hover:bg-primary-maroon-1 hover:text-white ">
                        <EnquireLink>Enquire Today</EnquireLink>
                    </button>
                </div>
            </section>
        </>
    );
}

export default Enquire;
