import React from "react";
import { Header, Profile, OtherTopics } from "../../container/MissionVision";
import Hero from "../../component/hero/Hero";

function page() {
    return (
        <>
            <Hero title={"Mission & Values"} />
            <Header />
            <Profile />
            <OtherTopics />
        </>
    );
}

export default page;
