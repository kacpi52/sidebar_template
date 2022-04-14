import React, { useState, useEffect } from "react";
import Menu from "../Components/SidebarMenu/Menu";
import ShopItem from "../Components/ShopItem/ShopItem";
import { Row, Col, Container } from "react-bootstrap";
import { Alert } from "bootstrap";
import AlertBox from "../Components/AlertBox/AlertBox";

const pathXml = "/Data/Opony.xml";
const mainTagSelector = "o";
const priceTagSelector = "price";
const descTagSelector = "desc";
const imgTagSelector = "imgs main";
const imgAttSelector = "url";
const prodTagSelector = "attrs a[name='Producent']";

const Shop = () => {
  const [xmlElems, setXmlElems] = useState([]);

  useEffect(() => {
    fetch(pathXml)
      .then((res) => res.text())
      .then((xmlString) => {
        const xmlDomObj = new window.DOMParser().parseFromString(
          xmlString,
          "text/xml"
        );
        const xmlOElems = xmlDomObj.getElementsByTagName(mainTagSelector);
        const xmlElemsArr = Array.from(xmlOElems).map((elem, i) => {
          return {
            price: elem.getAttribute(priceTagSelector),
            desc: elem.querySelector(descTagSelector).textContent,
            imgurl: elem
              .querySelector(imgTagSelector)
              .getAttribute(imgAttSelector),
            producent: elem.querySelector(prodTagSelector).textContent,
          };
        });
        setXmlElems(xmlElemsArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AlertBox />
      <Menu />
      <Container>
        <Row>
          <Col xs={12}>ALL SEASONS TIRES </Col>
        </Row>
        <Row>
          {xmlElems.map((elem, index) => (
            <ShopItem
              title={xmlElems.length > 0 && elem.desc}
              prod={xmlElems.length > 0 && elem.producent}
              imgurl={xmlElems.length > 0 && elem.imgurl}
              price={xmlElems.length > 0 && elem.price}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Shop;
