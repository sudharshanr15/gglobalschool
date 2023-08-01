import React from 'react'
import ProgramCard from "./ProgramCards"

function Programme() {
  return (
      <section>
          <div className="w-[90%] mx-auto mt-40 md:mt-3xl">
              <p className="text-heading-3 text-primary-maroon-1 ">
                  PRIMARY YEARS @ G GLOBAL SCHOOL PROGRAMMES
              </p>
          </div>
          <div id="programCards" className="md:flex md:gap-large mx-auto w-[90%] ">
              <ProgramCard year={1} duration={6} />
              <ProgramCard year={1} duration={6} />
              <ProgramCard year={1} duration={6} />
              <ProgramCard year={1} duration={6} />
              <ProgramCard year={1} duration={6} />
          </div>
      </section>
  );
}

export default Programme