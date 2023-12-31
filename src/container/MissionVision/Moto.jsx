import React from 'react'
import Image from 'next/image'
import { img_4 } from "@/assets/images/individual-pursuit";


function Moto() {
  return (
      <section className=" section-container bg-primary-maroon-1 text-center text-white">
          <div className="md:w-[90%] mx-auto">
              <p className="text-heading-3 uppercase">OUR MOTTO</p>
              <div className='lg:flex gap-12 items-center mt-4'>
                  <div className='basis-6/12 rounded-xl overflow-hidden'>
                    <Image src={img_4} alt='moto image'></Image>
                  </div>
                  <div className='basis-6/12'>
                      <p className="md:text-heading-5 uppercase my-10 text-heading-4">
                          <span className="text-primary-yellow-1 ">
                              “Enlightening Minds”{" "}
                          </span>
                          is the motto of G Global School.
                      </p>
                      <p className="text-body">
                          An idea challenges you, brings in right opportunity, takes you
                          through unfamiliar path. An idea can change your life. It all
                          happens in mind. When mind is enlightened, positivity is
                          accelerated, innovations are seen.
                      </p>
                      <p className="py-xl text-body">
                          <span className="font-bold">
                              Enlightenment through Education
                          </span>
                          &nbsp; is G Global’s motto.Enlightening Minds is what we
                          strive for.”
                      </p>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Moto