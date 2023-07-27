import React from 'react';
import Image from 'next/image';

function StudioCards({ img, text1, text2, text3, isReversed }) {
  return (
    <div className={`w-full md:w-[90%] flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} md:mt-7 mx-auto p-5 gap-5 md:gap-[117px]`}>
      <div className="w-full md:w-[60%]">
        <p className="text-primary-maroon-1 font-normal text-heading-3 w-full md:w-[100%]">
          {text1} <span className=' text-heading-3'>STUDIO</span>
        </p>
        <div className="text-base font-normal leading-7 tracking-normal md:w-[100%] text-left">
          <p className="pt-2">
            {text2}
          </p>
          <p className="pt-4">
            {text3}
          </p>
        </div>
      </div>
      <div className="relative left-0 md:left-3 w-full md:w-[50%]">
        <Image src={img} alt="logo"  className=" w-[100%] " />
      </div>
    </div>
  )
}

export default StudioCards

