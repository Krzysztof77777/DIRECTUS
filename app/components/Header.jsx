import { useState, useEffect } from "react";

import { useMainContext } from "../src/store/MainStore";

import Hamburger from "./Hamburger";

const Header = (props) => {
  return (
    <header className="header">
      <Hamburger></Hamburger>
      <div className="header__content content">
        <div className="header__logo">
          <a href="/"></a>
        </div>
        <div className="header__title">
          <h1>
            <span>
              <span>W</span>
              <span>I</span>
              <span>T</span>
              <span>A</span>
              <span>M</span>
              <span>Y</span>
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
