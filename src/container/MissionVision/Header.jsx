import React from 'react'
import Moto from "./Moto"
import quote from "../../assets/quote.png"
import Image from 'next/image';
function Header() {
  return (
      <>
          <div className="w-[80%] mx-auto ">
              <div className="md:flex gap-5 relative ">
                  <div className="md:w-[50%] my-10 ">
                      <Image
                          src={quote}
                          unoptimized
                          className="absolute md:-top-5 top-5 h-20 w-20 md:h-[120px] md:w-[150px]"
                      />
                      <p className="text-heading-3 text-primary-maroon-2 mb-5">
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
                  <div className="md:w-[50%] my-10 relative">
                      <Image
                          src={quote}
                          unoptimized
                          className="absolute md:-top-16 top-5 h-20 w-20 md:h-[120px] md:w-[150px]"
                      />
                      <p className="text-heading-3 text-primary-maroon-2 mb-5">
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