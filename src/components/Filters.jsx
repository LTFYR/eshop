import React from "react";
import { useFilterContext } from "../context/filterContext";
import { FaCheck } from "react-icons/fa";
import { dynamicValues } from "../utils/dynamicValues";
import { Brands, Categories, Colors } from "../components/index";
import "../assets/sass/pages/Products.scss";
import { formatPrice } from "../utils/price";

const Filters = () => {
  const {
    filter: { search, category, company, color, min, max, price, shipping },
    handleFilters,
    clearFilters,
    allProducts,
  } = useFilterContext();

  const categories = dynamicValues(allProducts, "category");
  const brands = dynamicValues(allProducts, "company");
  const colors = dynamicValues(allProducts, "colors");

  return (
    <div className="filters">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="filters__content">
          <input
            type="text"
            name="search"
            placeholder="Search product(s)"
            value={search}
            onChange={handleFilters}
          />
        </div>
        <div className="filters__content">
          <h5>Categories</h5>
          <div>
            <Categories categories={categories} />
          </div>
        </div>
        <div className="filters__content">
          <h5>Brands</h5>
          <div>
            <Brands brands={brands} />
          </div>
        </div>
        <div className="filters__content">
          <h5>Colors</h5>
          <div className="filters__content__colors">
            <Colors colors={colors} />
          </div>
        </div>
        <div className="filters__content">
          <h5>Price</h5>
          <div className="filters__content__range">
            <p className="filters__content__range--price">
              {formatPrice(price)}
            </p>
            <input
              type="range"
              name="price"
              onChange={handleFilters}
              value={price}
              min={min}
              max={max}
            />
          </div>
        </div>
        <div className="filters__content filters__shipping">
          <label htmlFor="shippinf">free shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleFilters}
          />
        </div>
      </form>
      <button className="filters__clear-all" onClick={clearFilters}>
        Reset filter
      </button>
    </div>
  );
};

export default Filters;
