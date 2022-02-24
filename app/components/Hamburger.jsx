import { useState, useEffect } from "react";

import { useMainContext } from "../src/store/MainStore";

const Hamburger = (props) => {
  const { isOpenMenuHamburger, setIsOpenMenuHamburger } = useMainContext();
  const handleMenuHamburger = () => {
    isOpenMenuHamburger
      ? setIsOpenMenuHamburger(false)
      : setIsOpenMenuHamburger(true);
  };
  return (
    <nav className="hamburger">
      <div className="hamburger__container">
        <a href="tel:+500"></a>
        <a href="mailto:test@test.com"></a>
        <button onClick={handleMenuHamburger}>
          <div>
            {isOpenMenuHamburger ? (
              <span
                style={{
                  transform: "translate(0px, 400%) rotate(45deg)",
                }}
              ></span>
            ) : (
              <span></span>
            )}
            {isOpenMenuHamburger ? (
              <span style={{ transform: "scaleX(0)" }}></span>
            ) : (
              <span></span>
            )}
            {isOpenMenuHamburger ? (
              <span
                style={{
                  transform: "translate(0px, -400%) rotate(-45deg)",
                }}
              ></span>
            ) : (
              <span></span>
            )}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Hamburger;
