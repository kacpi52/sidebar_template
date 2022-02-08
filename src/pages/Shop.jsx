import React, { useState, useEffect } from "react";
import Menu from "../Components/SidebarMenu/Menu";
import ShopItem from "../Components/ShopItem/ShopItem";
import { Row, Col, Container} from 'react-bootstrap';

const pathXml = "/Data/Opony.xml";
const mainTagSelector = "o";
const priceTagSelector = "price";
const descTagSelector = "desc";
const imgTagSelector = "imgs main";
const imgAttSelector = "url";
const prodTagSelector = "attrs a[name='Producent']";

const Shop = () => {
  const [xmlElems, setXmlElems] = useState([]),
        [productsArray, setProductsArray] = useState([]);

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
            imgurl: elem.querySelector(imgTagSelector).getAttribute(imgAttSelector),
            producent: elem.querySelector(prodTagSelector).textContent
          };
        });
        setXmlElems(xmlElemsArr);
      })
      .catch((err) => {
        console.log(err);
      });
      const tempArray = xmlElems.map((elem, index)=>{
        return (
          <ShopItem key={index}
            title={xmlElems.length > 0 && elem.desc}
            prod={xmlElems.length > 0 && elem.producent}
            imgurl={xmlElems.length > 0 && elem.imgurl}
            price={xmlElems.length > 0 && elem.price}
          />
          )
      })
      setProductsArray(tempArray);
  }, []);
  
  
  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col xs={12}>ALL SEASONS TIRES  </Col>
        </Row>
        <Row>
        {productsArray}
        </Row>
      </Container>

    </>
  );
};

export default Shop;

/*

 const productArray = [];
      const packElem = (index) => {
        return (
          <ShopItem
            key={index}
            title={xmlElems.length > 0 && xmlElems[index].desc}
            prod={xmlElems.length > 0 && xmlElems[index].producent}
            imgurl={xmlElems.length > 0 && xmlElems[index].imgurl}
            price={xmlElems.length > 0 && xmlElems[index].price}
          />
        )
      }
      const pushItems = (item, index) => {
      productArray[index] = packElem(index);
      setProductsArray(xmlElems.forEach(pushItems))
};



*/