import { useState, useEffect } from "react";

import { useMainContext } from "../src/store/MainStore";

const MenuFromHamburger = (props) => {
  const { isOpenMenuHamburger, setIsOpenMenuHamburger } = useMainContext();

  return (
    <div
      style={{
        transform: isOpenMenuHamburger ? "translateX(0%)" : "translateX(-100%)",
      }}
      className="menuHamburger"
    >
      <ul>
        <li>
          <a>Start</a>
        </li>
        <li>
          <a>O osiedlu</a>
        </li>
        <li>
          <a>Wizualizacje</a>
        </li>
        <li>
          <a>Lokalizacja</a>
        </li>
        <li>
          <a>Domy</a>
        </li>
        <li>
          <a>O nas</a>
        </li>
        <li>
          <a>Kontakt</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuFromHamburger;
