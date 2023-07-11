import React from 'react'
import TopicCard from "./TopicCard"

function OtherTopics() {
  return (
      <>
          <div className="w-[90%] mx-auto mt-20">
              <p className="uppercase text-heading-3 text-primary-maroon-1">
                  Other Topics To explore
              </p>
              <div className="flex w-[100%] mt-10">
                  <TopicCard text={"life @ ggc"}/>
                  <TopicCard text={"STUDENT COUNCIL"} />
              </div>
          </div>
      </>
  );
}

export default OtherTopics
