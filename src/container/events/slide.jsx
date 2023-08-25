"use client";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slide({setgallery}) {

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
        <>
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 flex items-center justify-center" onClick={()=>{setgallery(false)}} id="popup-overlay">
        </div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[80%] w-[90%]">
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
                    delay: 1000,
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

        </div></>
    );
}
export default Slide;

