import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const mainContext = createContext(null);

export const MainStore = ({ children }) => {
  const [visualizationsInsideImages, setVisualizationsInsideImages] = useState(
    []
  );
  const [visualizationsOutsideImages, setVisualizationsOutsideImages] =
    useState([]);
  const [
    activeVisualizationsSwiperImages,
    setActiveVisualizationsSwiperImages,
  ] = useState("all");
  const [isOpenMenuHamburger, setIsOpenMenuHamburger] = useState(false);
  const [showModalSwiper, setShowModalSwiper] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [modalSwiperRef, setModalSwiperRef] = useState();
  const [visualizationsSwiperRef, setVisualizationsSwiperRef] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.GRAPHQL}/items/VisualizationsInsideImages`)
      .then((result) => setVisualizationsInsideImages(result.data.data));
    axios
      .get(`${process.env.GRAPHQL}/items/VisualizationsOutsideImages`)
      .then((result) => setVisualizationsOutsideImages(result.data.data));
  }, []);

  return (
    <mainContext.Provider
      value={{
        visualizationsInsideImages,
        setVisualizationsInsideImages,
        visualizationsOutsideImages,
        setVisualizationsOutsideImages,
        activeVisualizationsSwiperImages,
        setActiveVisualizationsSwiperImages,
        isOpenMenuHamburger,
        setIsOpenMenuHamburger,
        showModalSwiper,
        setShowModalSwiper,
        showModal,
        setShowModal,
        modalSwiperRef,
        setModalSwiperRef,
        visualizationsSwiperRef,
        setVisualizationsSwiperRef,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export function useMainContext() {
  return useContext(mainContext);
}
