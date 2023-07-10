import React from 'react'
import Image from 'next/image'


function Cards({cardImage,title,desc,iswide}) {
  return (
      <>
          <div className={(iswide)?("w-[50%] "):("w-[30%]")}>
              <Image src={cardImage} alt="image" />
              <p className="text-primary-orange-1 font-bold text-heading-5 my-5">{ title}</p>
              <p>
                  {desc}
              </p>
          </div>
      </>
  );
}

export default Cards