import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ShopItem from "./ShopItem";

const ShopLayout = ({ mainItemsArray }) => {
  const allItemsHolder = (array) => {
    return array.map((elem, index) => <ShopItem {...elem} key={index} />);
  };
  return (
    <Container>
      <Row>
        <Col xs={12}>Shop Layout </Col>
      </Row>
      <Row>{allItemsHolder(mainItemsArray)}</Row>
    </Container>
  );
};

export default ShopLayout;
