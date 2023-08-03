import React from 'react'
import TopicCard from "./TopicCards"

function OtherTopics() {
  return (
      <>
          <div className="w-[90%] mx-auto mt-40 md:mt-20">
              <p className="uppercase text-heading-3 text-primary-maroon-1">
                  Other Topics To explore
              </p>
              <div className="md:flex md:gap-11 mt-10">
                  <TopicCard
                      text={"STUDENT AGENCY"}
                      overlayText={"STUDENT AGENCY"}
                  />
                  <TopicCard
                      text={"WHY US"}
                      overlayText={"WHY US"}
                  />
              </div>
          </div>
      </>
  );
}

export default OtherTopics