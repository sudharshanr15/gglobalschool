import React from "react";
import TopicCard from "@/component/topicsCard/TopicCard";

function Others() {
    return (
        <section className="section-container">
            <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-large">
                OTHER TOPICS TO EXPLORE
            </h2>
            <div className="flex flex-col md:flex-row gap-xl">
                <TopicCard text={"STUDENT COUNCIL"} link={""} />
                <TopicCard text={"STUDENT COUNCIL"} link={""} />
            </div>
        </section>
    );
}

export default Others;
