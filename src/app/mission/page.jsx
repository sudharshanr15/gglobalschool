import React from "react";
import { Header, Profile, OtherTopics } from "../../container/MissionVision";
import Hero from "../../component/hero/Hero";
import ExploreTopics from "@/component/ExploreTopics";

function page() {
    return (
        <>
            <Hero title={"Mission & Values"} />
            <Header />
            <Profile />
            <ExploreTopics />
        </>
    );
}

export default page;
