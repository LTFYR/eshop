import React, { useState } from "react";

const Images = ({ images = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <div className="product-images">
      <img src={mainImage.url} alt="main image" />
      <div className="product-images__others">
        {images.map((image, i) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={i}
              onClick={() => setMainImage(images[i])}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Images;
