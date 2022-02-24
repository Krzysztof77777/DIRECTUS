import { useEffect, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SwiperSlides from "./SwiperSlides";

import { useMainContext } from "../src/store/MainStore";

const swiperProps = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: true,
  speed: 0,
  pagination: {
    clickable: false,
    type: "fraction",
  },
  modules: [Navigation, Pagination],
  className: "mySwiper",
};

const ModalSwiper = (props) => {
  const {
    ModalSwiperRef,
    setModalSwiperRef,
    showModalSwiper,
    setShowModalSwiper,
  } = useMainContext();
  const modalRef = useRef(null);

  useEffect(() => {
    const clickOutsideContent = (e) => {
      if (e.target === modalRef.current) {
        setShowModalSwiper(false);
      }
    };
    window.addEventListener("click", clickOutsideContent);
    return () => {
      window.removeEventListener("click", clickOutsideContent);
    };
  }, [showModalSwiper]);

  return (
    <div ref={modalRef} className={`modal ${showModalSwiper ? "active" : ""}`}>
      <div className="modal__content">
        {!props.hideCloseButton && (
          <span
            onClick={() => setShowModalSwiper(false)}
            className="modal__close"
          >
            &times;
          </span>
        )}
        <SwiperSlides swiperProps={swiperProps} swiperRef={setModalSwiperRef}>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </SwiperSlides>
      </div>
    </div>
  );
};

export default ModalSwiper;
