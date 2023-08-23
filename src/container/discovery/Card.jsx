import React from 'react'
import Image from 'next/image'

function Card({ img,name}) {
  return (
      <>
          <Image unoptimized src={img} />
          <p className="text-heading-6 mt-md">{ name}</p>
    </>
  )
}

export default Card