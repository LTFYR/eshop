import React, { useState } from "react";
import { useFilterContext } from "../../context/filterContext";
import { Grid, Column } from "../index";

const Products = () => {
  const { filteredProducts: products, grid } = useFilterContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = products.slice(firstIndex, lastIndex);

  if (products.length < 1) {
    return <h5>Sorry, no products found ... </h5>;
  }
  if (grid === false) {
    return (
      <Column
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        postsPerPage={postsPerPage}
        currentPosts={currentPosts}
        products={products}
      />
    );
  }
  return <Grid currentPosts={currentPosts} products={products}></Grid>;
};

export default Products;
