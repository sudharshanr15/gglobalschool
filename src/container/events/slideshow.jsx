"use client";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slideshow = () => {

    const slides=[
        'Art Competition',
        'Art Expo',
        'Christmas',
        'Independence day',
        'International Doctors day'
    ]
    const swipeslide =slides.map(val=> {
        return <SwiperSlide className="relative">
            <div className="h-[80vh] w-full">
                <img
                    className="h-full w-full object-cover"
                    src={"/gallery/" + val + ".png"}
                    alt={val}
                />
            </div>
            <div className=" bg-primary-maroon-1 absolute bottom-0 m-2xl ">
                <p className="text-white md:text-heading-2 text-heading-6 uppercase p-large ">
                    {val}
                </p>
            </div>
        </SwiperSlide>
    })

  return (
    <section className="section-container">
      <h2 className="text-primary-maroon text-heading-5 mb-md lg:mb-xl">VIEW EVENTS GALLERY</h2>
      <Swiper
                style={{
                    "--swiper-pagination-color": "#790000",
                    "--swiper-navigation-color": "#790000",
                    "--swiper-navigation-size": "55px",
                }}
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
            {swipeslide}
            </Swiper>
    </section>
  )
}

export default Slideshow
