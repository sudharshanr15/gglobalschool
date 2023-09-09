'use client';

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from "swiper/modules";

function StudioCards({ className, img, name, text }) {
  return (
    <section className={className}>
      <div className="w-full md:w-1/2">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {img.map((item, index) => (
            <SwiperSlide key={index}>
                <Image src={item} alt="logo" className="w-[100%] h-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-md">
          <span className="font-normal">{name}</span> STUDIO
        </h2>
        <div className="flex flex-col gap-large text-body">
          {text.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudioCards;
