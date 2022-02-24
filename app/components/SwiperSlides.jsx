// Import Swiper React components
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperSlides({ swiperProps, swiperRef, children }) {
  return (
    <>
      <Swiper
        onInit={(ev) => {
          swiperRef(ev);
        }}
        slidesPerView={swiperProps.slidesPerView}
        spaceBetween={swiperProps.spaceBetween}
        loop={swiperProps.loop}
        loopedSlides={3}
        navigation={swiperProps.navigation}
        speed={swiperProps.speed}
        pagination={{
          clickable: swiperProps.pagination.clickable,
          type: swiperProps.pagination.type,
        }}
        modules={swiperProps.modules}
        className={swiperProps.className}
      >
        {children}
      </Swiper>
    </>
  );
}
