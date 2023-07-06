import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/price";
import Pagination from "../Pagination";
import "../../assets/sass/pages/Products.scss";

const Column = ({
  products,
  currentPage,
  currentPosts,
  postsPerPage,
  setCurrentPage,
}) => {
  console.log(postsPerPage);
  return (
    <div className="list-wrapper">
      {currentPosts.map((product) => {
        const { id, name, description, image, price } = product;
        return (
          <main key={id}>
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <h5>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Go to product
              </Link>
            </div>
          </main>
        );
      })}
      <Pagination
        totalPosts={products.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Column;
