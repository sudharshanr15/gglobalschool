'use client';

import { arrow_down, hero1, hero2, hero3 } from "@/assets"
import Link from "next/link"
import Image from "next/image";

import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-fade';

import {Autoplay, EffectFade} from "swiper/modules";
import { useState, useEffect } from "react";

import { arrow_underline } from "@/assets";

function Hero(){
  const hero_images = [hero1, hero2, hero3]
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(()=>{
    setInterval(() => {
      setCurrentImage(prev => {
        return ((prev+1) % hero_images.length)
      })
    }, 2500)
  }, [])


  return (
    <section className="hero-section section-container pb-0 bg-primary-orange-1 w-full h-screen">
      <div className="w-full h-full flex flex-col justify-between items-center md:flex-row gap-md pt-[100px] text-white">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-large md:gap-xl">
            <div className="text-heading-4 md:text-heading-1 uppercase w-fit">
              <h1 className="text-primary-maroon-1">ENLIGHTENING</h1>
              <Image src={arrow_underline} alt="Underline" className="w-full h-auto" />
              <h1>MINDS</h1>
            </div>
            <h2 className="text-[0.8rem] font-bold md:text-heading-5 uppercase">
              G GLOBAL SCHOOL THE <span className="text-primary-maroon-1">FIRST AUTHORISED IB WORLD SCHOOL</span> IN TIRUCHENGODE.
            </h2>
            <Link href={""} className="text-heading-6 md:text-heading-5 bg-primary-yellow-1 text-gray-900 px-8 py-md rounded-full w-fit">
              Enquire Now
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <div className="w-full max-w-[45rem] mx-auto transition-opacity duration-1000 relative h-full">
            {hero_images.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="Hero image"
                className={`w-full opacity-0 transition-opacity duration-200 absolute bottom-0 left-0 ${(currentImage == index) ? "opacity-100" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero