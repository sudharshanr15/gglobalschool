import React from 'react'

function ProgramCards({year, duration}) {
  return (
          <section className="bg-primary-maroon-1  py-xl px-8 rounded-3xl">
              <p className="text-white  text-heading-4 text-center ">
                  YEAR {year}
              </p>
            
              <div className="bg-primary-yellow-1 mt-xl  py-2 px-large rounded-3xl">
                  <p className=" text-gray-800 text-heading-6  text-center">
                      {duration} YEARS
                  </p>
              </div>
          </section>
  );
}

export default ProgramCards