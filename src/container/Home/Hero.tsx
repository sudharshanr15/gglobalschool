'use client';

import { hero1, hero2, hero3 } from "@/assets"
import Link from "next/link"
import Image from "next/image";

import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-fade';

import {Autoplay, EffectFade} from "swiper/modules";

function Hero(){
  const hero_images = [
    {
      image: hero1
    },
    {
      image: hero2
    },
    {
      image: hero3
    }
  ]

  return (
    <section className="hero-section section-container pb-0 bg-primary-orange-1">
      <div className="flex flex-col md:flex-row gap-md mt-[100px] text-white">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-large md:gap-xl">
            <h1 className="text-heading-4 md:text-heading-1 uppercase">
              <span className="text-primary-maroon-1">ENLIGHTENING</span>
              <br />
              MINDS
            </h1>
            <h2 className="text-[0.8rem] font-bold md:text-heading-5 uppercase">
              G GLOBAL SCHOOL THE <span className="text-primary-maroon-1">FIRST AUTHORISED IB WORLD SCHOOL</span> IN TIRUCHENGODE.
            </h2>
            <Link href={""} className="text-heading-6 md:text-heading-5 bg-primary-yellow-1 text-gray-900 px-8 py-md rounded-full w-fit">
              Enquire Now
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect={"fade"}
          >
            {hero_images.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full max-w-[40rem] mx-auto bg-primary-orange-1">
                  <Image
                    src={item['image']}
                    alt="Hero image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Hero