import React from "react";
import { useFilterContext } from "../../context/filterContext";

const Categories = ({ categories }) => {
  const {
    filter: { category },
    handleFilters,
  } = useFilterContext();
  return (
    <>
      {categories.map((ctg, ind) => {
        return (
          <button
            type="button"
            name="category"
            onClick={handleFilters}
            key={ind}
            className={`${category === ctg.toLowerCase() ? "active" : null}`}
          >
            {ctg}
          </button>
        );
      })}
    </>
  );
};

export default Categories;
