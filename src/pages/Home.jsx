import React from "react";
import {
  Contact,
  FeaturedProducts,
  Hero,
  OurServices,
} from "../components/index";
import Categories from "../components/Categories";
import Sale from "../components/Sale";
import CategoriesHome from "../components/Home/Categories";
import Slider from "../components/Home/Slider";
import { Col, Row } from "react-bootstrap";
import ReclamImages from "../components/ReclamImages";

const Home = () => {
  return (
    <main>
      <Hero />
      {/* <Row className="p-0 m-0">
        <Col lg={3}>
          <CategoriesHome />
        </Col>
        <Col lg={9} sm={12}>
          <Slider />
        </Col> */}
      {/* <Col className="banner-images" lg={2} sm={12}>
          <ReclamImages />
        </Col> */}
      {/* </Row> */}
      <Categories />
      <FeaturedProducts />
      <Sale />
      <OurServices />
      <Contact />
    </main>
  );
};

export default Home;
