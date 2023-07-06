import React, { useState } from "react";
import "../assets/sass/components/ProductDescription.scss";
import ProductComments from "./ProductComments";
import { useParams } from "react-router-dom";

const ProductDescription = ({ product }) => {
  const [index, setIndex] = useState(0);
  const { id } = useParams();
  return (
    <div className="tabs">
      <div className="tabs__tabsList">
        <div
          className={`tabs__tabsList__head ${index === 0 ? "activeTab" : null}`}
          onClick={() => setIndex(0)}
        >
          Description
        </div>
        <div
          className={`tabs__tabsList__head ${index === 1 ? "activeTab" : null}`}
          onClick={() => setIndex(1)}
        >
          Additional Infomation
        </div>
        <div
          className={`tabs__tabsList__head ${index === 2 ? "activeTab" : null}`}
          onClick={() => setIndex(2)}
        >
          Reviews(1)
        </div>
      </div>
      <div className="tabs__tabsContent" hidden={index != 0}>
        {product.description}
      </div>
      <div className="tabs__tabsContent" hidden={index != 1}>
        <div className="tabs__tabsContent__tab">
          <p>Weight</p> <span>2 Ibs</span>
        </div>
        <div className="tabs__tabsContent__tab">
          <p>Weight</p> <span>2 Ibs</span>
        </div>
        <div className="tabs__tabsContent__tab">
          <p>Weight</p> <span>2 Ibs</span>
        </div>
        <div className="tabs__tabsContent__tab">
          <p>Weight</p> <span>2 Ibs</span>
        </div>
        <div className="tabs__tabsContent__tab">
          <p>Weight</p> <span>2 Ibs</span>
        </div>
        <div className="tabs__tabsContent__tab">
          <p>Weight</p> <span>2 Ibs</span>
        </div>
      </div>
      <div className="tabs__tabsContent" hidden={index != 2}>
        <ProductComments />
      </div>
    </div>
  );
};

export default ProductDescription;
