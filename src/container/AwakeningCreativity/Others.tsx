import React from "react";
import TopicCard from "./topicCards";

function Others() {
  return (
    <>
    <section className="section-container">
    <div className="w-[90%] mx-auto my-20 md:mt-20">
        <p className="uppercase text-heading-4 text-primary-maroon-1">
          Other Topics To explore
        </p>
        <div className="md:flex md:gap-11 mt-10">
          <TopicCard text={"LIFE @ GGS"} overlayText={"LIFE @ GGS"} />
          <TopicCard text={"STUDENT COUNCIL"} overlayText={"STUDENT COUNCIL"} />
        </div>
      </div>

    </section>
      
    </>
  );
}

export default Others;
