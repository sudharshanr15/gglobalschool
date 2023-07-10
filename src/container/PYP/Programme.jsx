import React from 'react'
import ProgramCard from "./ProgramCards"

function Programme() {
  return (
      <>
          <div className="w-[90%] mx-auto my-20">
              <p className="text-heading-3 text-primary-maroon-1 ">
                  PRIMARY YEARS @ G GLOBAL SCHOOL PROGRAMMES
              </p>
          </div>
          <div id="programCards" className="flex justify-between mx-auto w-[90%] ">
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