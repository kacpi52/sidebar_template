import React from "react";
import "./ShopItem.scss";
import { Col, Image } from "react-bootstrap";
const ShopItem = ({ title, producent, imgurl, price }) => {
  return (
    <Col xs={12} md={6} lg={4}>
      <div className="item">
        <p>{producent}</p>
        <Image rounded src={imgurl} className="item__image" />
        <p>{title}</p>
        <p>{price} zł/sztuka </p>
      </div>
    </Col>
  );
};

export default ShopItem;
