import React from "react";
import { WhatWeOffer, Vision, Programme,OtherTopics } from "../../container/PYP";
import Hero from "../../component/hero/Hero"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function page() {
    return (
        <>
            <Hero title={"Primary Year Programme"} />
            <section className="relative section-container bg-primary-maroon-1 ">
                <div className="absolute top-0 left-0 z-0">
                    <FormatQuoteIcon sx={{ fontSize: 150, opacity: 0.2, color: "#F05A22"}} />
                </div>
                <p className="text-heading-6 uppercase text-white z-10">
                    Curiosity is the fuel for discovery, inquiry and learning
                </p>
            </section>
            <Vision />
            <WhatWeOffer />
            <Programme />
            <OtherTopics />
        </>
    );
}

export default page;
