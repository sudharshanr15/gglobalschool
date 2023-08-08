import React from 'react'
import TopicCard from "../StudentCouncil/topicCards"

function Others() {
  return (
      <section className='section-container'>
          <div className="mx-auto">
              <p className="uppercase text-heading-4 text-primary-maroon-1">
                  Other Topics To explore
              </p>
              <div className="md:flex md:gap-xl mt-xl">
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
      </section>
  );
}

export default Others

