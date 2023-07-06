import React from "react";
import { services } from "../utils/helpers";

const OurServices = () => {
  return (
    <div className="services">
      <div className="section-center">
        <article className="services__header">
          <h3>
            Made furniture <br />
            with heart for you
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            laborum officia consectetur! Omnis ipsa cupiditate nemo modi quos
            pariatur in minus officiis voluptate, tempore eos eligendi
            voluptatum ut architecto soluta.
          </p>
        </article>
        <div className="services__center">
          {services.map((service) => {
            const { id, text, icon, title } = service;
            return (
              <article className="services__center__service">
                <span className="services__center__service--icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
