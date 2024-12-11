'use client';

import React, { useEffect, useState } from 'react'
import ModalWrapper from './ModalWrapper'
import KiddathonImage from "@/assets/kiddathon/image.jpg";
import Image from 'next/image';

function Kiddathon(){
    const [isModalOpen, setisModalOpen] = useState(true);

    useEffect(() => {
        if(isModalOpen){
            document.querySelector("body")!.style.overflow = "hidden"
        }else{
            document.querySelector("body")!.style.overflow = "auto"
        }
    }, [isModalOpen])

    function onModalClose(){
        setisModalOpen(false)
    }

    if(!isModalOpen){
        return <>
        </>
    }

  return (
    <ModalWrapper onModalClose={onModalClose}>
        <a href="https://forms.gle/E3NdVEhpUm6wtRet5" target='_blank' className="flex flex-col items-center bg-[#E94B37]">
            <div className="max-h-screen">
                <Image className='object-contain max-h-[90vh] w-auto' src={KiddathonImage} alt='Kiddathon Banner' />
            </div>
            <button className='text-white text-sm lg:text-lg underline font-bold py-3'>Register Now</button>
        </a>
    </ModalWrapper>
  )
}

export default Kiddathon