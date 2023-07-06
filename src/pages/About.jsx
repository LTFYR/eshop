import React from "react";
import { BreadCrumb } from "../components/index";
import about from "../assets/images/about.jpg";
import "../assets/sass/pages/About.scss";

const About = () => {
  return (
    <main>
      <BreadCrumb title="about" />
      <div className="about h section section-center">
        <img src={about} alt="" />
        <article>
          <div className="about__title">
            <h2>About us</h2>
            <div className="about__title__underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              odit quia sed fugit assumenda illo velit! Quae in tempore
              obcaecati possimus labore distinctio non cumque voluptatum est
              dolore explicabo odio quas laboriosam, rem, assumenda dolorum ea?
              Praesentium a aspernatur at officia incidunt soluta sed ut
              quisquam ipsa commodi vitae fugit quaerat similique numquam
              dolores, consequuntur atque iste pariatur aliquid. Dolores facere,
              minus explicabo provident ab mollitia? Quaerat suscipit placeat
              provident ea neque. Sit molestias pariatur assumenda unde modi
              aliquid quidem maxime, voluptas, similique ex iste nobis deleniti
              excepturi possimus consequuntur harum perspiciatis itaque ullam
              repellat quis repellendus. Facilis, est tempore?
            </p>
          </div>
        </article>
      </div>
    </main>
  );
};

export default About;
