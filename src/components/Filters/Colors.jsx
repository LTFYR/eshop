import React from "react";
import { useFilterContext } from "../../context/filterContext";
import { FaCheck } from "react-icons/fa";

const Colors = ({ colors }) => {
  const {
    filter: { color },
    handleFilters,
    clearFilters,
    allProducts,
  } = useFilterContext();

  return (
    <>
      {colors.map((clr, ind) => {
        if (clr === "all") {
          return (
            <button
              key={ind}
              name="color"
              className="all"
              onClick={handleFilters}
              data-color="all"
            >
              all
            </button>
          );
        }
        return (
          <button
            type="button"
            name="color"
            key={ind}
            className={`${color === clr ? "color active" : "color"}`}
            style={{ backgroundColor: clr }}
            data-color={clr}
            onClick={handleFilters}
          >
            {color === clr ? <FaCheck /> : null}
          </button>
        );
      })}
    </>
  );
};

export default Colors;
