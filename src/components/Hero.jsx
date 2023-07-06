import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/images/homebg.jpg";
import "../assets/sass/pages/Home.scss";
import bg2 from "../assets/images/homebg2.jpg";

const Hero = () => {
  return (
    <div style={{ marginTop: "100px" }} className="hero-wrapper section-center">
      <article className="hero-wrapper__content">
        <h1>Design your own world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          adipisci, voluptatibus iure atque doloremque maiores cupiditate
          possimus perspiciatis earum soluta modi illum assumenda tempore!
          Voluptates unde, suscipit eius hic architecto fugiat quo rem?
          Molestias laudantium pariatur sed cumque eligendi, est cupiditate
          aperiam et maxime ratione accusantium non qui rem possimus, laborum
          quisquam repudiandae ipsa commodi deserunt blanditiis consequatur
          modi. Consequuntur!
        </p>
        <Link to="/products" className="btn">
          Shop now
        </Link>
      </article>
      <article className="hero-wrapper__image">
        <img
          src={bg}
          className="hero-wrapper__image--main"
          alt="bg furniture"
        />
        <img
          src={bg2}
          className="hero-wrapper__image--secondary"
          alt="bg furniture"
        />
      </article>
    </div>
  );
};

export default Hero;
