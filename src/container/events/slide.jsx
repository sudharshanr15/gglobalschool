"use client";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css";

function Slide({setgallery, gallery_name, gallery_images}) {
    const thumbnailsRef = useRef(null);
    const zoomRef = useRef(null);

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

    return (
        <Lightbox
            open={true}
            close={() => setgallery(false)}
            slides={gallery_images}
            plugins={[Thumbnails, Zoom]}
            zoom={{ ref: zoomRef }}
            thumbnails={{ ref: thumbnailsRef }}
            on={{
                click: () => {
                    (thumbnailsRef.current?.visible ? thumbnailsRef.current?.hide : thumbnailsRef.current?.show)?.();
                },
            }}
        />
    );
}
export default Slide;

