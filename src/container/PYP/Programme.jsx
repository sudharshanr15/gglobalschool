import React from 'react'
import ProgramCard from "./ProgramCards"

function Programme() {
  return (
      <section className=" section-container ">
              <p className="text-heading-3 text-primary-maroon-1 mb-xl">
                  PRIMARY YEARS @ G GLOBAL SCHOOL PROGRAMMES
              </p>
          <div
              id="programCards"
              className="md:flex md:gap-large mx-auto "
          >
              <ProgramCard year={1} duration={6} />
              <ProgramCard year={2} duration={7} />
              <ProgramCard year={3} duration={8} />
              <ProgramCard year={5} duration={9} />
              <ProgramCard year={6} duration={10} />
          </div>
      </section>
  );
}

export default Programme