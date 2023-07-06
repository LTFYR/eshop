import React from "react";
import { BreadCrumb } from "../components";
import contact from "../assets/images/contact.jpg";
import "../assets/sass/components/Categories.scss";

const Contact = () => {
  return (
    <main className="contact-us">
      <BreadCrumb title="contact" />
      <div className="container section section-center">
        <div className="row form">
          <div className="col-12 col-lg-6">
            <div className="title">
              <h4>Get In Touch</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                labore eius dolorum nihil magnam officiis, delectus corporis est
                fugit inventore animi recusandae, placeat ipsa voluptatibus
                doloribus enim eaque deserunt! Iure.
              </p>
            </div>
            <form>
              <input type="text" placeholder="Enter Name *" />
              <input type="email" placeholder="Enter Email *" />
              <input type="tel" placeholder="Enter Phone No *" />
              <input type="text" placeholder="Enter Subject" />
              <textarea cols="30" rows="10" placeholder="Message *" />
              <button type="submit" className="btn">
                Message
              </button>
            </form>
          </div>
          <div className="col-12 col-lg-6">
            <img src={contact} alt="contactus" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="title-map">
              <h4>Also you can find us Here ...</h4>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
                width="600"
                height="300"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
