import React from "react";
import { Product } from "./index";
import { useProductsContext } from "../context/productsContext";
import "../assets/sass/components/ProductDetail.scss";
import { Link, useParams } from "react-router-dom";
import { formatPrice } from "../utils/price";
import { FaSearch } from "react-icons/fa";

export const SimilarProducts = ({ product, category }) => {
  const { loading, error, featuredProducts } = useProductsContext();
  const { id } = useParams();

  const similar_products = featuredProducts.filter(
    (fp) =>
      fp.category === product.category ||
      (fp.company === product.company && fp.id !== id)
  );
  return (
    <div className="similar">
      <h2>Similar products</h2>
      <div className="similar__similar-products">
        {similar_products.map((prd) => {
          return (
            <div className="similar__similar-products__container">
              <img src={prd.image} alt={prd.name} />
              <Link
                to={`/products/${prd.id}`}
                className="similar__similar-products__container__url"
              >
                <FaSearch />
              </Link>
              <div className="similar__similar-products__container__detail">
                <h5>{prd.name}</h5>
                <p>{formatPrice(prd.price)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
