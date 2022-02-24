import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import { useMainContext } from "../src/store/MainStore";

import ModalSwiper from "../components/PopupSwiper";

import Header from "../components/Header";
import MenuFromHamburger from "../components/MenuFromHamburger";
import AboutUs from "../components/AboutUs";
import Visualizations from "../components/Visualizations";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../components/Popup";

const fetchPosts = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL}/posts`);
  return result.json();
};

export default function Home() {
  // const { data, status } = useQuery("Posts", fetchPosts);
  // console.log(data, process.env.NEXT_PUBLIC_GRAPHQL);
  return (
    <>
      <Header></Header>
      <AboutUs></AboutUs>
      <Visualizations></Visualizations>
      <Modal
      // hideCloseButton
      >
        <ModalHeader>
          <h2>Modal header</h2>
        </ModalHeader>
        <ModalBody>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            maxime dolorem asperiores laboriosam ad delectus ea. Tempora tempore
            repellendus laudantium fugiat saepe mollitia eius illo possimus
            laborum consequuntur, tenetur neque.
          </p>
        </ModalBody>
        <ModalFooter>
          <button onClick={() => setShowModal(false)}>Close</button>
        </ModalFooter>
      </Modal>
      <ModalSwiper
      // hideCloseButton
      ></ModalSwiper>
      <Contact></Contact>
      <Footer></Footer>
      <MenuFromHamburger></MenuFromHamburger>
    </>
  );
}
