import React, { useState } from "react";
import { Product } from "../index";
import "../../assets/sass/pages/Products.scss";
import Pagination from "../Pagination";

const Grid = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = products.slice(firstIndex, lastIndex);
  return (
    <div className="products-grid">
      <div className="products-grid__container">
        {currentPosts.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <hr />
      <Pagination
        totalPosts={products.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Grid;
