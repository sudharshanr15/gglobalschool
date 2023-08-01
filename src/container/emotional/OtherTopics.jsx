import React from "react";
import TopicCard from "../PYP/TopicCard";

function OtherTopics() {
    return (
        <section className="w-[90%] mx-auto">
            <p className="uppercase text-heading-3 text-primary-maroon-1">
                Other Topics To explore
            </p>
            <div className="md:flex md:gap-large mt-large">
                <TopicCard
                    text={"STUDENT COUNCIL"}
                    overlayText={"STUDENT COUNCIL"}
                />
                <TopicCard text={"LIFE @ GGS"} overlayText={"LIFE @ GGS"} />
            </div>
        </section>
    );
}

export default OtherTopics;
