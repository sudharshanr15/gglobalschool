import React from 'react'
import img from "../../assets/Rectangle 78.png"
import Image from 'next/image'

function TopicCard({text}) {
  return (
    <>
      <div className='content-center px-10 w-full md:w-[80%] h-[40%]  ' >
        <Image src={img} alt="checked" className=" md:left-3 w-full md:w-full md:w-auto" />
        <div className="bg-primary-maroon-1 w-full text-center py-4">
          <p className="text-white uppercase text-heading-5">{ text }</p>
        </div>
      </div>
    </>

  )
}

export default TopicCard
