import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

import SwiperSlides from "./SwiperSlides";

import { useMainContext } from "../src/store/MainStore";

const swiperProps = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: false,
  speed: 200,
  pagination: {
    clickable: true,
    type: "",
  },
  modules: [Navigation, Pagination],
  className: "mySwiper visualizations__swiper",
};

const Visualizations = (props) => {
  const {
    visualizationsInsideImages,
    visualizationsOutsideImages,
    activeVisualizationsSwiperImages,
    setActiveVisualizationsSwiperImages,
    visualizationsSwiperRef,
    setVisualizationsSwiperRef,
  } = useMainContext();

  return (
    <section className="visualizations">
      <header className="visualizations__header">
        <div className="visualizations__title">
          <h2>Wizualizacje</h2>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
          <p>Sprawdź jak możesz mieszkać na osiedlu Nowa Farma</p>
        </div>
        <div className="visualizations__buttons">kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
          <button onClick={() => setActiveVisualizationsSwiperImages("all")}>
            Wszystko
          </button>
          <button
            onClick={() => setActiveVisualizationsSwiperImages("outside")}
          >
            Wizualizacje z zewnątrz
          </button>
          <button onClick={() => setActiveVisualizationsSwiperImages("inside")}>
            Wizualizacje wnętrza
          </button>
        </div>
      </header>
      <div className="visualizations__slider">
        <div className="visualizations__container">
          <SwiperSlides
            swiperProps={swiperProps}
            swiperRef={setVisualizationsSwiperRef}
          >
            {(activeVisualizationsSwiperImages === "all" ||
              activeVisualizationsSwiperImages === "inside") &&
              visualizationsInsideImages.map((e) => {
                return (
                  <SwiperSlide key={e.id}>
                    <img src={process.env.GRAPHQL + "/assets/" + e.Image}></img>
                  </SwiperSlide>
                );
              })}
            {(activeVisualizationsSwiperImages === "all" ||
              activeVisualizationsSwiperImages === "outside") &&
              visualizationsOutsideImages.map((e) => {
                return (
                  <SwiperSlide key={e.id}>
                    <img src={process.env.GRAPHQL + "/assets/" + e.Image}></img>
                  </SwiperSlide>
                );
              })}
          </SwiperSlides>
        </div>
        <div className="visualizations__arrows">
          <button
            onClick={() => {
              visualizationsSwiperRef.slidePrev();
            }}
          >
            <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon>
          </button>
          <button
            onClick={() => {
              visualizationsSwiperRef.slideNext();
            }}
          >
            <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Visualizations;
