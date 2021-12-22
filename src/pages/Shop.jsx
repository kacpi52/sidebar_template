import React, { useState, useEffect } from "react";
import Menu from "../Components/SidebarMenu/Menu";
import ShopItem from "../Components/ShopItem/ShopItem";
import {Row, Col, Container} from 'react-bootstrap';

const Shop = () => {
  const itemsArray=[];
  const [xmlElems, setXmlElems] = useState([]);
  
  useEffect(() => {
    fetch("/Data/Opony.xml")
      .then((res) => res.text())
      .then((xmlString) => {
        const xmlDomObj = new window.DOMParser().parseFromString(
          xmlString,
          "text/xml"
        );
        const xmlOElems = xmlDomObj.getElementsByTagName("o");
        const xmlElemsArr = Array.from(xmlOElems).map((elem, i) => {
          return {
            price: elem.getAttribute("price"),
            desc: elem.querySelector("desc").textContent,
            imgurl: elem.querySelector("imgs main").getAttribute('url'),
            producent: elem.querySelector("attrs a[name='Producent']").textContent
          };
        });
        setXmlElems(xmlElemsArr);
        console.log(xmlElemsArr[0].imgurl);
        console.log(xmlElemsArr[1].imgurl);
        console.dir(xmlElemsArr[0].attr)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  for (let i = 0; i < 7; i++) {
    itemsArray.push(<ShopItem
      title={xmlElems.length > 0 && xmlElems[i].desc}
      prod={xmlElems.length > 0 && xmlElems[i].producent}
      imgurl={xmlElems.length > 0 && xmlElems[i].imgurl}
      price={xmlElems.length > 0 && xmlElems[i].price}
    />);
  }

  return (
    <>
      <Menu />
      <Container>
        <Row>
        <Col xs={12}>LESS TRACTION MORE ACTION</Col>
        </Row>
        <Row>
          {itemsArray}
        </Row>
      </Container>
      
    </>
  );
};

export default Shop;
