import React from 'react'
import TopicCard from "../StudentCouncil/topicCards"

function Others() {
  return (
      <>
          <div className="w-[90%] mx-auto my-20 md:mt-20">
              <p className="uppercase text-heading-4 text-primary-maroon-1">
                  Other Topics To explore
              </p>
              <div className="md:flex md:gap-11 mt-10">
                  <TopicCard
                      text={"MISSION & VISION"}
                      overlayText={"MISSION & VISION"}
                  />
                  <TopicCard
                      text={"OUR STORY"}
                      overlayText={"OUR STORY"}
                  />
              </div>
          </div>
      </>
  );
}

export default Others
