import React from 'react'
import TopicCard from "./topicCards"

function Others() {
  return (
      <section>
          <div className="w-[90%] mx-auto my-3xl md:mt-3xl">
              <p className="uppercase text-heading-4 text-primary-maroon-1">
                  Other Topics To explore
              </p>
              <div className="md:flex md:gap-2xl mt-xl">
                  <TopicCard
                      text={"AWEKENING CREATIVITY"}
                      overlayText={"AWEKENING CREATIVITY"}
                  />
                  <TopicCard
                      text={"STUDENT COUNCIL"}
                      overlayText={"STUDENT COUNCIL"}
                  />
              </div>
          </div>
      </section>
  );
}

export default Others

