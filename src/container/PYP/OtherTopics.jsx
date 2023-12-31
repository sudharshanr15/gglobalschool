import React from 'react'
import TopicCard from "./TopicCard"

function OtherTopics() {
  return (
      <section className=" section-container">
          <p className="uppercase text-heading-3 text-primary-maroon-1">
              Other Topics To explore
          </p>
          <div className="md:flex md:gap-xl mt-xl">
              <TopicCard
                  text={"EMOTIONAL & ETHICAL SUPPORT"}
                  overlayText={"EMOTIONAL & ETHICAL SUPPORT"}
              />
              <TopicCard
                  text={"EMOTIONAL & ETHICAL SUPPORT"}
                  overlayText={"life @ ggs"}
              />
          </div>
      </section>
  );
}

export default OtherTopics