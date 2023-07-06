import React from "react";
import { useFilterContext } from "../../context/filterContext";

const Brands = ({ brands }) => {
  const {
    filter: { company },
    handleFilters,
    clearFilters,
  } = useFilterContext();

  return (
    <select name="company" value={company} onChange={handleFilters}>
      {brands.map((brand, ind) => {
        return (
          <option value={brand} key={ind}>
            {brand}
          </option>
        );
      })}
    </select>
  );
};

export default Brands;
