import React from "react";
import "../../assets/sass/pages/Home.scss";
import ReclamImages from "../ReclamImages";
import subcateg from "../../assets/images/mac.jpg";

const CategoriesHome = () => {
  return (
    <nav className="home-categ">
      <ul class="home-categ__menu-cat d-none d-lg-block">
        <li>Choose a Category</li>
        <li>
          <h3>Books</h3>
          <div>
            <ul>
              <li>
                <a href="#">English</a>
              </li>
              <li>
                <a href="#">Dutch</a>
              </li>
              <li>
                <a href="#">German</a>
              </li>
              <li>
                <a href="#">French</a>
              </li>
              <li>
                <a href="#">Spanish</a>
              </li>
              <li>
                <a href="#">Turkish</a>
              </li>
              <li>
                <a href="#">Arabic</a>
              </li>
              <li>
                <a href="#">English</a>
              </li>
              <li>
                <a href="#">Dutch</a>
              </li>
              <li>
                <a href="#">German</a>
              </li>
              <li>
                <a href="#">French</a>
              </li>
              <li>
                <a href="#">Spanish</a>
              </li>
            </ul>
            {/* <div className="home-categ__menu-cat__image">
              <img
                className="home-categ__menu-cat__image--categimg"
                src={subcateg}
                alt=""
              />
              <img
                className="home-categ__menu-cat__image--categimg"
                src={subcateg}
                alt=""
              />
            </div> */}
          </div>
        </li>
        <li>
          <h3>Computer & Electronics</h3>
          <div>
            <h4>Smartphones</h4>
          </div>
        </li>
        <li>
          <h3>Toys</h3>
          <div>
            <h4>Brands</h4>
          </div>
        </li>
        <li>
          <h3>Sport & Leisure</h3>
          <div>
            <h4>Sport</h4>
          </div>
        </li>
        <li>
          <h3>Home & Cooking</h3>
          <div>
            <h4>Cooking</h4>
          </div>
        </li>
        <li>
          <h3>Garden & DIY</h3>
          <div>
            <h4>Garden</h4>
          </div>
        </li>
        <li>
          <h3>Gifts</h3>
          <div>
            <h4>Gifts</h4>
          </div>
        </li>
        <li>
          <h3>Specials</h3>
          <div>
            <h4>Specials</h4>
          </div>
        </li>
        <li>
          <h3>Computer & Electronics</h3>
          <div>
            <h4>Smartphones</h4>
          </div>
        </li>
        <li>
          <h3>Computer & Electronics</h3>
          <div>
            <h4>Smartphones</h4>
          </div>
        </li>
        <li>
          <h3>Computer & Electronics</h3>
          <div>
            <h4>Smartphones</h4>
          </div>
        </li>
        <li>
          <h3>Computer & Electronics</h3>
          <div>
            <h4>Smartphones</h4>
          </div>
        </li>
        <li>
          <h3>Computer & Electronics</h3>
          <div>
            <h4>Smartphones</h4>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default CategoriesHome;
