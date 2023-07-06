import React from "react";
import { useProductsContext } from "../context/productsContext";
import { useFilterContext } from "../context/filterContext";
import { dynamicValues } from "../utils/dynamicValues";
import categimg from "../assets/images/categ.jpg";
import "../assets/sass/components/Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  const { products } = useProductsContext();

  const categories = dynamicValues(products, "category");
  return (
    <div className="categories section-center">
      <div className="title">
        <h2>Categories</h2>
      </div>
      <div className="categories__content">
        {categories.map((category) => {
          return (
            <div className="categories__content__category">
              <img src={categimg} alt="" />
              <button>{category}</button>
              <div className="categories__content__category__overlay">
                <Link to="/products">Go to products</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
