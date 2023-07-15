import React from 'react'
import Image from 'next/image'


function Cards({cardImage,title,desc,iswide}) {
  return (
      <>
          <div
              className={
                  iswide
                      ? "md:w-[50%] my-20 sm:mt-0"
                      : "md:w-[30%] my-20 sm:mt-0"
              }
          >
              <Image src={cardImage} alt="image" />
              <p className="text-primary-orange-1 font-bold text-heading-5 my-5">
                  {title}
              </p>
              <p>{desc}</p>
          </div>
      </>
  );
}

export default Cards