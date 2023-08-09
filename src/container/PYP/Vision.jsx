import React from 'react'
import Image from "next/image";
import pypLogo from "../../assets/pyp image big.png";

function Vision() {
  return (
      <section className="section-container ">
          <p className="text-heading-4 uppercase p-md">
              Curiosity is the fuel for discovery, inquiry and learning
          </p>
          <section className=" w-full section-containe md:flex my-2xl justify-center items-center">
              <div>
                  <Image src={pypLogo} alt="logo" unoptimized />
              </div>
              <div className=" md:w-[50%] flex flex-col gap-y-xl md:p-3xl p-md">
                  <p className="text-primary-maroon-1 text-heading-3">
                      PRIMARY YEAR PROGRAMME
                  </p>
                  <p>
                      The PYP curriculum framework is designed for learners aged
                      6 - 12.
                  </p>
                  <p>
                      The curriculum is trans disciplinary and is ideal for
                      students to become active lifelong learners.
                      Collaboration, responsibility and taking action are the
                      focus of PYP.
                  </p>
                  <p>
                      Our students are guided by expert teachers who effectively
                      help in moulding the knowledge and skills in a happy and
                      enthusiastic environment.
                  </p>
              </div>
          </section>

          <section
              id="goalContainer"
              className=" section-container  bg-primary-maroon-1  rounded-3xl  md:uppercase "
          >
              <p className="text-white text-heading-5 text-center  leading-10 ">
                  Our goal is to promote{" "}
                  <span className="text-primary-yellow-1 text-heading-5">
                      “International mindedness”
                  </span>
                  ,
                  <br />
                  manifesting a sense of morality to all the human beings in the
                  global society.
              </p>
          </section>
      </section>
  );
}

export default Vision