"use client";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slide() {
    const events = [
        "Fathers Day",
        "International yoga day",
        "International mud day",
        "National doctors day",
        "World chocolate day",
        "Investiture ceremony",
        "International friendship day and twins day",
        "Independence Day",
        "Krishna Jayanthi and photography day",
        "Vinayak Chaturthi",
        "Teachers day and Onam",
        "International literacy day",
        "Grand parents day",
        "Dot day",
        "GGS Book fair",
        "Navarathri begins",
        "Vijayadashami",
        "Sports day",
        "Diwali",
        "Halloween day",
        "GGS Art competition",
        "Children’s day",
        "World heritage week",
        "Thanks giving day",
        "Math expo",
        "Christmas and new year celebration",
        "Pongal celebration",
        "Republic Day",
        "4th GGS kiddathon",
        "DEAR WEEK",
        "International mother language day",
        "GGS SANGAMAM",
        "International women’s day",
        "Art exhibition",
        "Annual day  graduation",
        "PYP Exhibition",
    ];
    return (
        <div className="md:w-[80%] w-[90%] mx-auto mt-2xl ">
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
                {events.map((val) => 
                        <SwiperSlide className="relative">
                            <div className="h-[80vh] w-full">
                                <img
                                    className="h-full w-full object-cover"
                                    src={"/eventsimg/" + val + ".png"}
                                    alt={"galary image 1"}
                                />
                            </div>
                            <div className=" bg-primary-maroon-1 absolute bottom-0 m-2xl ">
                                <p className="text-white md:text-heading-2 text-heading-6 uppercase p-large ">
                                    {val}
                                </p>
                            </div>
                        </SwiperSlide>
                    )}
            </Swiper>
        </div>
    );
}
export default Slide;
