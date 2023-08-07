import React from "react";
import Image from "next/image";

function TopicCards({img, text, text1 }) {
  return (
    <>
      <div className=" relative mt-20 md:mt-0 md:w-[48%]  text-center">
        <Image src={img} alt="checked" className="w-[640px] md:h-[350px]" unoptimized />
        <div className="bg-primary-maroon-1">
          <p className="text-white uppercase text-heading-5 p-md">{text}</p>
        </div>
        <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary-maroon-1 opacity-0 transition duration-700 ease-in-out hover:opacity-100">
<<<<<<< HEAD
          <p className="text-white text-heading-5 uppercase p-5">{text1}</p>
          <button className="bg-white rounded-full text-heading-6 py-4 px-20 ">
=======
          <p className="text-white text-heading-5 uppercase p-md">{text1}</p>
          <button className="bg-white rounded-full text-heading-6py-md px-3xl ">
>>>>>>> 3900c0151339d84ce5196a681712f9622e9b0377
            View
          </button>
        </div>
      </div>
    </>
  );
}

export default TopicCards;
