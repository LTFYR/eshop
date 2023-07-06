import React from "react";
import { useFilterContext } from "../context/filterContext";
import { BsFillGridFill, BsList } from "react-icons/bs";
import "../assets/sass/pages/Products.scss";

const Sort = () => {
  const {
    filteredProducts: products,
    grid,
    setColumnView,
    setGridView,
    changeSort,
    sorting,
  } = useFilterContext();

  return (
    <div className="sort">
      <div className="sort__buttons">
        <button
          type="button"
          className={`${grid ? "active" : null}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`${!grid ? "active" : null}`}
          onClick={setColumnView}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        {/* <label htmlFor="sort">Sort by</label> */}
        <select name="sort" id="sort" value={sorting} onChange={changeSort}>
          <option value="low">price by (lowest)</option>
          <option value="high">price by (highest)</option>
          <option value="a">name by (a-z)</option>
          <option value="z">name by (z-a)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
