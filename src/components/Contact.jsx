import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="section-center">
        <h3>Join Our Newslatter and get 20% off</h3>
        <div className="contact__content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            necessitatibus aut sint quisquam cupiditate ad unde, eveniet
            incidunt. Suscipit sint ad earum pariatur. Natus autem consequuntur
            reprehenderit sapiente omnis dicta!
          </p>
          <form
            action="https://formspree.io/f/xayzdyll"
            method="POST"
            className="contact__content__form"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="contact__content__form--input"
            />
            <button type="submit" className="contact__content__form--btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
