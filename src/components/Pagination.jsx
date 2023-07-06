import React from "react";
import styled from "styled-components";
import "../assets/sass/pages/Products.scss";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((page, i) => (
        <button
          key={i}
          className={
            currentPage === page ? "active pagination__btn" : "pagination__btn"
          }
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
