import "../styles/globals.css";
import { MainStore } from "../src/store/MainStore";

import "../src/styles/base.scss";
import "../src/styles/Hamburger.scss";
import "../src/styles/MenuFromHamburger.scss";
import "../src/styles/Header.scss";
import "../src/styles/AboutUs.scss";
import "../src/styles/Visualizations.scss";
import "../src/styles/Contact.scss";
import "../src/styles/Footer.scss";
import "../src/styles/Popup.scss"; //Popup styles
import "../src/styles/SwiperSlides.scss"; //Swiper styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainStore>
        <Component {...pageProps} />
      </MainStore>
    </>
  );
}

export default MyApp;
