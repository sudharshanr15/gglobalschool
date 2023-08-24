"use client"
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import img1 from "../../assets/life@ggs7.png"

function Slide ()  {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Image src={img1} alt={"galary image 1"}/></SwiperSlide>
      <SwiperSlide><Image src={img1} alt={"galary image 2"}/></SwiperSlide>
      <SwiperSlide><Image src={img1} alt={"galary image 3"}/></SwiperSlide>
      <SwiperSlide><Image src={img1} alt={"galary image 4"}/></SwiperSlide>
      
    </Swiper>
  );
};
export default Slide;