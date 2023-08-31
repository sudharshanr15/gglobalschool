'use client';

import { arrow_down, hero1, hero2, hero3 } from "@/assets"
import Link from "next/link"
import Image from "next/image";

import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-fade';

import {Autoplay, EffectFade} from "swiper/modules";
import { useState, useEffect } from "react";
import Form from "../../component/Admission-Form/Form";

import { arrow_underline } from "@/assets";

function Hero(){
  const hero_images = [hero1, hero2, hero3]
  const [currentImage, setCurrentImage] = useState(0);
  const [isFormOpen, setFormOpen] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setCurrentImage(prev => {
        return ((prev+1) % hero_images.length)
      })
    }, 2500)
  }, [])


  return (
    <>
      <section className="hero-section section-container pb-0 bg-primary-orange-1 w-full h-screen">
        <div className="w-full h-full flex flex-col justify-between items-center lg:flex-row gap-md pt-[100px] text-white">
          <div className="w-full lg:w-7/12">
            <div className="flex flex-col gap-large md:gap-xl">
              <div className="text-heading-4 sm:text-heading-3 md:text-heading-3 xl:text-heading-1 uppercase w-fit">
                <h1 className="text-primary-maroon-1">ENLIGHTENING</h1>
                <Image src={arrow_underline} alt="Underline" className="w-full h-auto" />
                <h1>MINDS</h1>
              </div>
              <h2 className="text-caption sm:text-heading-6 font-bold md:text-heading-5 uppercase">
                G GLOBAL SCHOOL THE <span className="text-primary-maroon-1">FIRST AUTHORISED IB WORLD SCHOOL</span> IN TIRUCHENGODE.
              </h2>
              <button className="btn-slide w-fit" onClick={() => setFormOpen(true)}>
                Enquire Now
              </button>
            </div>
          </div>
          <div className="w-full lg:w-5/12 h-full">
            <div className="w-full max-w-[45rem] mx-auto transition-opacity duration-1000 relative h-full">
              {hero_images.map((item, index) => (
                <div className={`flex items-end absolute bottom-0 left-0 w-full h-full xl:h-auto opacity-0 ${(currentImage == index) ? "opacity-100" : ""}`}>
                  <Image
                    key={index}
                    src={item}
                    alt="Hero image"
                    className="mx-auto w-auto h-full lg:w-full lg:h-auto transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {isFormOpen && (
          <Form onClose={setFormOpen} />
      )}
    </>
  )
}

export default Hero