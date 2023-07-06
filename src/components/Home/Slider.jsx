import React from "react";
import { Carousel } from "react-bootstrap";
import "../../assets/sass/pages/Home.scss";

const Slider = () => {
  return (
    <Carousel
      className="carousel-custom"
      autoPlay={true}
      interval={5000}
      controls={false}
      indicators={true}
    >
      <Carousel.Item className="carousel-custom__item">
        <img
          className="d-block w-100 carousel-custom__item--image"
          src={require("../../assets/images/main-banner-1.jpg")}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-custom__item__caption">
          <p className="carousel-custom__item__caption--subtitle">
            Supercharged for aces
          </p>
          <h3 className="carousel-custom__item__caption--title">
            Samsung A52+ Pro
          </h3>
          <p className="carousel-custom__item__caption--desc">
            From $1200 or $50.99/mo for 24 mo. Credit
          </p>
          <button className="carousel-custom__item__caption--btn btn">
            Buy now
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-custom__item">
        <img
          className="d-block w-100 carousel-custom__item--image"
          src={require("../../assets/images/main-banner.jpg")}
        />

        <Carousel.Caption className="carousel-custom__item__caption">
          <p className="carousel-custom__item__caption--subtitle">
            Amazing trailor
          </p>
          <h3 className="carousel-custom__item__caption--title">
            Second slide label
          </h3>
          <p className="carousel-custom__item__caption--desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="carousel-custom__item__caption--btn btn">
            Buy now
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
