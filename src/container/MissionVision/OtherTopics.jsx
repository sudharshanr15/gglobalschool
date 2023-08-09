import React from "react";
import TopicCard from "../PYP/TopicCard";

function OtherTopics() {
    return (
        <section className=" section-container w-[90%] mx-auto">
            <p className="uppercase text-heading-3 text-primary-maroon-1">
                Other Topics To explore
            </p>
            <div className="md:flex md:gap-large mt-large">
                <TopicCard
                    text={"STUDENT AGENCY"}
                    overlayText={"STUDENT AGENCY"}
                />
                <TopicCard text={"WHY US"} overlayText={"WHY US"} />
            </div>
        </section>
    );
}

export default OtherTopics;
