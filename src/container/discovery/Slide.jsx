"use client";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";

function Slide({ setSlider, gallery_name, gallery_images }) {
    useEffect(() => {
        console.log("inside");
        console.log(gallery_images);
    }, []);

    const slides = [
        "Art Competition",
        "Art Expo",
        "Christmas",
        "Independence day",
        "International Doctors day",
    ];
    return (
        <section className="fixed top-0 left-0 h-screen w-screen">
            <div
                className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-80"
                onClick={() => {
                    setSlider(false);
                }}
            >
            </div>
            <div
                className="flex items-center justify-center w-[80%] mx-auto"
            >
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
                    {gallery_images.map((val, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="text-white">
                                    {/* <Image
                                        className="w-full h-autoobject-contain"
                                        src={val}
                                        alt={gallery_name}
                                        placeholder="blur"
                                    /> */}
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo fuga illum cumque in animi nihil hic mollitia fugiat ratione. Nobis, modi id! Minus dolore sed at id? Eligendi magnam explicabo minima suscipit cupiditate cum deserunt quae nihil, non quidem officiis voluptatum laboriosam assumenda perferendis perspiciatis, similique unde voluptatibus quis! Numquam hic quasi sequi veniam saepe, earum doloremque! Ducimus voluptatibus quia velit dignissimos voluptatem et quae dolor sint, fugit consequuntur neque distinctio consequatur debitis facilis dolorem quaerat magni dolores dolorum porro sit, quam corrupti reprehenderit libero! Beatae at excepturi commodi hic debitis cum dolorem, quos aut aliquid non assumenda totam necessitatibus nemo distinctio delectus iure cumque, dolores maiores ipsa ducimus eum? Eligendi odit fugiat aspernatur. Inventore voluptas excepturi nesciunt. Sit veritatis, porro facere laborum consequuntur at impedit pariatur iure nulla quo possimus suscipit natus eos vel eum cumque est mollitia expedita laboriosam ipsum. Aut sit nemo qui nulla, deleniti expedita laborum voluptas fugit ipsa? Iste deleniti sit inventore tempore accusamus sunt voluptas nihil neque voluptates, non provident, maiores et laudantium ipsa, sapiente asperiores! Tempora provident enim deleniti asperiores nihil nesciunt perspiciatis labore corporis fuga, vero consequatur eveniet possimus dolorem fugit qui magnam accusantium? Neque consequuntur a nesciunt temporibus atque sint quo vero beatae excepturi corrupti natus laborum veritatis aspernatur voluptas, ea quidem sequi repellendus animi deleniti nostrum, incidunt accusantium voluptatibus? Debitis tempora veritatis reprehenderit illo saepe fuga magnam odio exercitationem laborum assumenda tenetur, pariatur iusto nobis commodi dicta reiciendis maxime. Obcaecati incidunt officia enim saepe ad ipsa aperiam explicabo minima cupiditate, corporis eligendi. Ratione debitis eius natus aspernatur officia recusandae, temporibus ea id quibusdam perferendis! Officia iure totam nostrum reprehenderit eum, omnis commodi ut magnam rem numquam magni saepe ducimus? Assumenda hic quis nostrum blanditiis nihil commodi ipsam dolores repellendus eius? Quos, ullam earum tempore quod sapiente libero iusto tenetur voluptatibus possimus distinctio consequatur excepturi blanditiis sint quam molestias fugit fugiat quidem obcaecati! Quo, ducimus? Nesciunt placeat cupiditate consequatur! Ab quisquam repellendus possimus perspiciatis. Earum fugiat ipsam adipisci deserunt quia. Repudiandae voluptatum consequuntur ullam provident debitis et maxime ipsa, sed sunt. Dolorem voluptatum consectetur quaerat modi praesentium, ex quasi molestias dolores odit, quam alias sapiente, doloribus provident. Modi temporibus suscipit repellendus, sint tempora similique aperiam illo unde ut fuga pariatur error dolore possimus officia soluta facere reprehenderit optio quod expedita quia. Voluptatum eveniet nihil error amet rerum nobis itaque inventore dolore sint consectetur! Quis reprehenderit perferendis voluptatem molestias, animi debitis officiis tempore, deleniti consequatur perspiciatis amet fuga. Ratione porro voluptatum fuga labore eum eligendi doloremque quidem, facere ut numquam voluptatem. Omnis provident sapiente doloremque architecto dicta amet repellendus eius hic unde illo iste sint praesentium dolores quae dolore vitae ea nisi veniam, tempore cupiditate! Minima cupiditate incidunt earum architecto quidem deleniti, illum in perspiciatis reiciendis, hic asperiores quis porro dolore vitae sint inventore alias rerum maiores quam quibusdam at nemo. Nulla, in reiciendis ea, ad blanditiis nisi accusantium accusamus sequi velit quasi repellat deleniti sed pariatur impedit itaque totam eum tempora delectus assumenda officiis deserunt iure. Sed facilis reprehenderit quis iste.
                                </div>
                                {index == 0 && (
                                    <div className=" bg-primary-maroon-1 absolute bottom-0 m-2xl ">
                                        <p className="text-white md:text-heading-2 text-heading-6 uppercase p-large ">
                                            {gallery_name}
                                        </p>
                                    </div>
                                )}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}
export default Slide;
