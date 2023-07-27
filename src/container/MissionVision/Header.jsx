import React from 'react'
import Moto from "./Moto"

function Header() {
  return (
      <>
          <div className="w-[80%] mx-auto ">
              <div className="md:flex gap-5 ">
                  <div className="md:w-[50%] my-10">
                      <p className="text-heading-3 text-primary-maroon-2">
                          OUR VISION
                      </p>
                      <p className="text-body">
                          “ We nurture{" "}
                          <span className="text-primary-maroon-2 font-bold">
                              conscious lifelong learning
                          </span>{" "}
                          for all, at all times.”
                      </p>
                  </div>
                  <div className="md:w-[50%] my-10">
                      <p className="text-heading-3 text-primary-maroon-2">
                          OUR MISSION
                      </p>
                      <p className="text-body">
                          “G Global School aims to develop{" "}
                          <span className="text-primary-maroon-2 font-bold">
                              conscious lifelong learners by enlightening their
                              minds
                          </span>{" "}
                          through informed curiosity and enduring passion, with
                          multicultural understanding and respect to create a
                          better and more peaceful world.”
                      </p>
                  </div>
              </div>
          </div>
          <Moto />
      </>
  );
}

export default Header