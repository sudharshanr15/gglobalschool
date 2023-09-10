'use client';

import * as hero from "@/assets/images/hero-images"
import Link from "next/link"
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-fade';
import arrowDown from '@/assets/icons/arrow-down.svg'
import {Autoplay, EffectFade} from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import Form from "../../component/Admission-Form/Form";

import { arrow_underline } from "@/assets";

function Hero(){
  const heroImages = Object.values(hero)
  const [isFormOpen, setFormOpen] = useState(false);

  const switchRef = useRef(null);
  const [hasContentMoved, setHasContentMoved] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // The callback is called whenever the target element (contentRef) enters
      // or exits the viewport or intersects with the observer's root.
      const hasMoved = entries[0].isIntersecting === false;
      setHasContentMoved(hasMoved);
    });

    const contentElement = switchRef.current;

    if (contentElement) {
      observer.observe(contentElement);
    }

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className="hero-section pb-0 bg-primary-orange-1 lg:h-screen overflow-hidden lg:relative">
        <div className="w-full hidden lg:block absolute bottom-10">
          <div className="h-20">
            <div className={`mx-auto h-full w-10 border-[6px] rounded-full  flex justify-center transition-[transform] duration-1000 ${hasContentMoved ? 'border-[#FDDBA3]' :'border-white items-end'}`}>
              <div className={`mx-1 my-2 h-2/5 w-6/12 rounded-full transition-[background] duration-300 ${hasContentMoved? 'bg-white':'bg-primary-yellow-1'}`}></div>
            </div>
          </div>
        </div>
        <div className="mt-[13vh] lg:w-full lg:absolute lg:bottom-0 lg:px-3xl px-3 ">
          <div className="lg:flex lg:flex-wrap lg:justify-between">
            <div className="lg:basis-[50%]">
              <div className="text-heading-4 uppercase lg:text-heading-1 lg:mt-20">
                  <h1 className="text-primary-maroon-1">Enlightening</h1>
                  <Image className="my-1 w-10/12 xl:w-9/12 lg:my-2" src={arrow_underline} alt="underline"></Image>
                  <h1 className="text-white">Minds</h1>
              </div>
              <div className="my-4">
                <div>
                  <p className="uppercase text-xl w-11/12 lg:w-9/12 text-white font-bold lg:bg-primary-maroon-1 lg:p-4 lg:rounded-lg">G Global School the <span className="text-primary-maroon-1 lg:text-primary-yellow-1">first authorised IB world school</span> in Tiruchengode.</p>
                </div>
              </div>
              <div className="mt-6">
                <button className="font-semibold text-xl py-2 px-8  rounded-full bg-primary-yellow-1 lg:py-3 lg:px-10 lg:font-bold" onClick={() => setFormOpen(true)}>Enquire Now</button>
              </div>
            </div>
            <div className="mt-8 lg:basis-[48%] overflow-hidden lg:mt-0 ">
              <div className="">
                <div className="md:hidden absolute mt-4">
                  <div className=" flex items-end gap-1">
                      <div className=" w-4 whitespace-nowrap">
                        <p className="rotate-[-90deg] font-semibold text-white">know more</p>
                      </div>
                      <div className="h-16 mb-4">
                        <Image className="h-full animate-bounce" src={arrowDown} alt="|"></Image>
                      </div>
                  </div>
                </div>
                <Swiper className="" allowTouchMove={false} loop={true} autoplay={{delay:1500, disableOnInteraction: false}} modules={[EffectFade, Autoplay]} effect={'fade'}>
                  {
                    heroImages.map((image)=>{
                    return(
                      <SwiperSlide className="">
                        {({isActive})=>{
                          return(
                            <Image className={`${isActive ? 'opacity-1' : 'opacity-0'}`} src={image} alt="Student Image"></Image>
                          )
                        }}
                      </SwiperSlide>
                    )
                  })
                  }
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* This line sets the switch of a UI element to on state and turning off a switch */}
      <div className="h-1 w-full mt-3"  ref={switchRef}></div>
      {isFormOpen && (
          <Form onClose={setFormOpen} />
      )}
    </>
  )
}

export default Hero


  // <div className="w-full lg:w-5/12 h-full border-4 border-blue-600">
  //           <div className="w-full max-w-[45rem] mx-auto transition-opacity duration-1000 relative h-full border-4">
  //             {hero_images.map((item, index) => (
  //               <div className={`flex items-end absolute bottom-0 left-0 w-full h-full xl:h-auto opacity-0 ${(currentImage == index) ? "opacity-100" : ""}`}>
  //                 <Image
  //                   key={index}
  //                   src={item}
  //                   alt="Hero image"
  //                   className=""
  //                   // className="border-4 border-green-500 mx-auto w-auto h-full lg:w-full lg:h-auto transition-opacity duration-200"
  //                 />
  //               </div>
  //             ))}
  //           </div>
  //         </div>