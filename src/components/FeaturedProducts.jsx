import React from "react";
import { Loading, Error, Product } from "./index";
import { useProductsContext } from "../context/productsContext";

const FeaturedProducts = () => {
  const { loading, error, featuredProducts } = useProductsContext();

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }
  return (
    <div className="featured">
      <div className="featured__title">
        <h2>Featured products</h2>
        <div className="text-underline"></div>
      </div>
      <div className="section-center featured__feature">
        {featuredProducts.slice(0, 6).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
