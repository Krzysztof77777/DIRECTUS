import { useState, useEffect } from "react";

import { useMainContext } from "../src/store/MainStore";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <img src="https://www.cnet.com/a/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg"></img>
        <p>
          Treści znajdujące się na stronie internetowej nie stanowią oferty w
          rozumieniu przepisów prawa i winny być interpretowane wyłącznie jak
          informacja, o których jest mowa w art. 71 Kodeksu Cywilnego.
        </p>
      </div>
      <div className="footer__navigation">
        <ul>
          <li>O osiedlu</li>
          <li>Wizualizacje</li>
          <li>Lokalizacja</li>
          <li>Domy</li>
          <li>O nas</li>
          <li>Kontakt</li>
        </ul>
        <div className="footer__social">
          <div className="footer__follow">
            <span>Obserwuj nas:</span>
            <a>Instagram</a>
            <a>Facebook</a>
          </div>
          <div className="footer__copy">
            <span>
              Stworzone z ❤️ przez <a>RendPro</a>
            </span>
            <span>2021 © Nowa Farma.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
