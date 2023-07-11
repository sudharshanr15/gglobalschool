import React from 'react'
import img from "../../assets/Rectangle 79.png"
import Image from 'next/image'

function TopicCard({text}) {
  return (
    <>
      <div className='content-center px-4  ' >
        <Image src={img} alt="checked" className="w-[100%]" />
        <div className="bg-primary-maroon-1">
          <p className="text-white uppercase text-heading-5">{ text }</p>
        </div>
      </div>
    </>

  )
}

export default TopicCard
