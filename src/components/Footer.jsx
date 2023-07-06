import React from "react";
import "../assets/sass/components/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer__links">
          <ul className="footer__links__link">
            <li>Azerbaijan, Baku 23</li>
            <li> +994 87 889 89 88</li>
            <li>With passion</li>
            <li>Free</li>
          </ul>
          <ul className="footer__links__link">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
          <ul className="footer__links__link">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
          <ul className="footer__links__link">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
          <ul className="footer__links__link">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
        </div>
        <div className="footer__rights">
          <h5>
            &copy; {new Date().getFullYear()}
            <span>e-Shop</span>
          </h5>
          <h5>All rights reserved</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
