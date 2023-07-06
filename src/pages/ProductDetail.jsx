import React, { useEffect } from "react";
import { singleproduct as url } from "../utils/api";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useProductsContext } from "../context/productsContext";
import {
  Loading,
  Error,
  BreadCrumb,
  Images,
  Rating,
  Basket,
} from "../components/index";
import { formatPrice } from "../utils/price";
import "../assets/sass/components/ProductDetail.scss";
import { SimilarProducts } from "../components/SimilarProducts";
import ProductDescription from "../components/ProductDescription";

const ProductDetail = () => {
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchApiSingleProduct,
  } = useProductsContext();

  const navigate = useNavigate();

  useEffect(() => {
    fetchApiSingleProduct(`${url}${id}`);
  }, [id]);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    category,
    stars,
    reviews,
    images,
    company,
    id: sku,
  } = product;
  console.log(product);

  return (
    <div className="pdetail">
      <BreadCrumb product={product} title={name} />
      <div className="section section-center h">
        <Link to="/products" className="btn">
          go to products
        </Link>
        <div className="pdetail__product">
          <Images images={images} />
          <section className="pdetail__product__content">
            <h2>{name}</h2>
            <Rating stars={stars} reviews={reviews} />
            <h5 className="pdetail__product__content--price">
              {formatPrice(price)}
            </h5>
            <p className="pdetail__product__content--description">
              {description}
            </p>
            <p className="pdetail__product__content--info">
              <span>Available : </span>
              {stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <p className="pdetail__product__content--info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="pdetail__product__content--info">
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <Basket product={product} />}
          </section>
        </div>
        <ProductDescription product={product} />
        <SimilarProducts category={category} product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;
