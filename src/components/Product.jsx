import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/sass/components/Product.scss";
import { formatPrice } from "../utils/price";

const Product = ({ image, name, id, price }) => {
  return (
    <div className="product">
      <div className="product__container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="product__container__url">
          <FaSearch />
        </Link>
      </div>
      <div className="product__container__detail">
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default Product;
