import React from 'react'
import Moto from "./Moto"
import quote from "../../assets/quote.png"
import Image from 'next/image';
function Header() {
  return (
      <>
          <section className="w-[80%] mx-auto ">
              <div className="md:flex gap-3xl relative ">
                  <div className="md:w-[50%] my-xl ">
                      <Image
                          src={quote}
                          unoptimized
                          className="absolute md:-top-md top-md h-20 w-20 md:h-[120px] md:w-[150px]"
                      />
                      <p className="text-heading-3 text-primary-maroon-2 mb-md">
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
                  <div className="md:w-[50%] my-xl relative">
                      <Image
                          src={quote}
                          unoptimized
                          className="absolute md:-top-2xl top-md h-20 w-20 md:h-[120px] md:w-[150px]"
                      />
                      <p className="text-heading-3 text-primary-maroon-2 mb-md">
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
          </section>
          <Moto />
      </>
  );
}

export default Header