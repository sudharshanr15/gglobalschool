"use client";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import img1 from "../../assets/life@ggs7.png";

function Slide() {
    const Content = (text) => (
        <div className=" bg-primary-maroon-1 absolute bottom-0 m-2xl ">
            <p className="text-white md:text-heading-2 text-heading-6 uppercase p-5 ">
                discovery out of the wall
            </p>
        </div>
    );
    return (
        <div className="md:w-[80%] w-[90%] mx-auto mt-2xl">
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
                <SwiperSlide className="relative">
                    <Image src={img1} alt={"galary image 1"} />
                    <Content title="discovery out of the wall" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={img1} alt={"galary image 2"} />
                    <Content title="discovery out of the wall" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={img1} alt={"galary image 3"} />
                    <Content title="discovery out of the wall" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={img1} alt={"galary image 4"} />
                    <Content title="discovery out of the wall" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
export default Slide;
