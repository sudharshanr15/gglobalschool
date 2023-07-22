import React from 'react'

function ProgramCards({year, duration}) {
  return (
      <>
          <div className="bg-primary-maroon-1 my-20 md:my-10 py-10 px-8 rounded-3xl">
              <p className="text-white  text-heading-4 text-center ">
                  YEAR {year}
              </p>
            
              <div className="bg-primary-yellow-1 mt-10  py-2 px-6 rounded-3xl">
                  <p className=" text-gray-800 text-heading-6  text-center">
                      {duration} YEARS
                  </p>
              </div>
          </div>
      </>
  );
}

export default ProgramCards