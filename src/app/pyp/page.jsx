import React from "react";
import { WhatWeOffer, Vision, Programme,OtherTopics } from "../../container/PYP";
import Hero from "../../component/hero/Hero"

function page() {
    return (
        <>
            <Hero title={"emorional and ethical  support"}/>
            <Vision />
            <WhatWeOffer />
            <Programme />
            <OtherTopics/>
        </>
    );
}

export default page;
