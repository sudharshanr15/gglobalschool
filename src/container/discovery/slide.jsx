"use client";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";

function Slide({setSlider, gallery_name, gallery_images}) {

    useEffect(() => {
        console.log("inside")
        console.log(gallery_images)
    }, [])

    const slides=[
        'Art Competition',
        'Art Expo',
        'Christmas',
        'Independence day',
        'International Doctors day'
    ]
    const swipeslide =gallery_images.map((val, index)=> {
        return <SwiperSlide className="relative" key={index}>
            <div className="h-[80vh] w-full">
                <Image
                    className="h-full w-full object-cover"
                    src={val}
                    alt={gallery_name}
                    placeholder="blur"
                />
            </div>
            {(index == 0) && (
                <div className=" bg-primary-maroon-1 absolute bottom-0 m-2xl ">
                    <p className="text-white md:text-heading-2 text-heading-6 uppercase p-large ">
                        {gallery_name}
                    </p>
                </div>
            )}
        </SwiperSlide>
    })

    return (
        <>
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 flex items-center justify-center" onClick={()=>{setSlider(false)}} id="popup-overlay">
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

