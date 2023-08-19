import React from 'react'
import Image from 'next/image'


function Cards({cardImage,title,desc,iswide}) {
  return (
      <section
          className={
              iswide
                  ? "md:w-[50%]  sm:mt-0 group hover:relative hover:bg-primary-maroon-1"
                  : "md:w-[600px]  sm:mt-0 group hover:relative  hover:bg-primary-maroon-1  "
          }
      >
          <div className=" ">
              <Image
                  src={cardImage}
                  alt="image"
                  unoptimized
                  className=" transition ease-in-out duration-300  group-hover:origin-top   h-[480px]  object-cover"
              />
          </div>

          <div className="md:group-hover:absolute bottom-0 md:group-hover:top-[40%]  group-hover:bg-primary-maroon-1  transition ease-in-out  duration-700 py-xl px-md ">
              <p className="text-primary-orange-1 font-bold text-heading-5 ">
                  {title}
              </p>
              <p className="group-hover:text-white text-body">{desc}</p>
          </div>
      </section>
  );
}

export default Cards