import React from 'react'
import ProgramCard from "./ProgramCards"

function Programme() {
  return (
      <>
          <div className="w-[90%] mx-auto mt-40 md:mt-20">
              <p className="text-heading-3 text-primary-maroon-1 ">
                  PRIMARY YEARS @ G GLOBAL SCHOOL PROGRAMMES
              </p>
          </div>
          <div id="programCards" className="md:flex md:gap-6 mx-auto w-[90%] ">
              <ProgramCard year={1} duration={6} />
              <ProgramCard year={1} duration={6} />
              <ProgramCard year={1} duration={6} />
              <ProgramCard year={1} duration={6} />
              <ProgramCard year={1} duration={6} />
          </div>
      </>
  );
}

export default Programme