import React from 'react'
import Image from 'next/image'


function Cards({cardImage,title,desc,iswide}) {
  return (
      <>
          <div
              className={
                  iswide
                      ? "md:w-[50%] my-20 sm:mt-0 group hover:relative hover:bg-primary-maroon-1"
                      : "md:w-[30%] my-20 sm:mt-0 group hover:relative  hover:bg-primary-maroon-1"
              }
          >
              <Image
                  src={cardImage}
                  alt="image"
                  unoptimized
                  className="w-full transition ease-in-out  duration-300 group-hover:scale-y-75 group-hover:origin-top "
              />
              <div className="group-hover:absolute bottom-0 group-hover:top-[20%]  group-hover:bg-primary-maroon-1  transition ease-in-out  duration-300 py-10 px-5">
                  <p className="text-primary-orange-1 font-bold text-heading-5 mb-5 ">
                      {title}
                  </p>
                  <p className="group-hover:text-white text-body">{desc}</p>
              </div>
          </div>
      </>
  );
}

export default Cards