import React from 'react'
import Image from "next/image";
import pypLogo from "../../assets/pyp image big.png";

function Vision() {
  return (
      <section>
          <p className="text-heading-4 uppercase mx-auto md:w-[90%] p-md">
              Curiosity is the fuel for discovery, inquiry and learning
          </p>
          <div className="md:w-[90%] md:flex  justify-center items-center mx-auto my-3xl">
              <div>
                  <Image src={pypLogo} alt="logo" unoptimized />
              </div>
              <div className="md:w-[50%] flex flex-col gap-y-xl md:p-3xl p-md">
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
          </div>

          <div
              id="goalContainer"
              className="bg-primary-maroon-1 w-[90%] mx-auto rounded-3xl md:p-3xl p-xl md:uppercase mb-3xl"
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
          </div>
      </section>
  );
}

export default Vision