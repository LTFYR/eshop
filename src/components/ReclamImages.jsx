import React from "react";
import sale from "../assets/images/reklam.jpg";
import sale2 from "../assets/images/reklam2.jpg";

const ReclamImages = () => {
  return (
    <>
      <div className="banner-images__img-cont">
        <img src={sale} alt="sale" />
      </div>
      <div className="banner-images__img-cont">
        <img src={sale2} alt="sale2" />
      </div>
    </>
  );
};

export default ReclamImages;
