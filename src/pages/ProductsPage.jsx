import React from "react";
import "../assets/sass/pages/Products.scss";
import { Filters, BreadCrumb, Sort, Products } from "../components/index";

const ProductsPage = () => {
  return (
    <main>
      <BreadCrumb title="products" />
      <div className="products h">
        <div className="section-center products__container">
          <Filters />
          <div>
            <Sort />
            <Products />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
