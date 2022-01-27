import React, { useState, useEffect } from "react";
import Menu from "../Components/SidebarMenu/Menu";
import ShopItem from "../Components/ShopItem/ShopItem";
import { Row, Col, Container, Button } from 'react-bootstrap';

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
            imgurl: elem.querySelector(imgTagSelector).getAttribute(imgAttSelector),
            producent: elem.querySelector(prodTagSelector).textContent
          };
        });
        setXmlElems(xmlElemsArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  /*   Tutaj mam problem identyczny jak w tej wersji gdzie uzywam forEach() czyli nie renderuje mi się to w komponencie 
       natomiast w konsoli to jest. Map bezposrednio dziala, probowalem cos kombinowac z async await ale wyszlo 
       na to samo.
   const showAllProducts = () => {
     xmlElems.map((elem, index) => (
       <ShopItem
         title={xmlElems.length > 0 && elem.desc} 
         prod={xmlElems.length > 0 && elem.producent}
         imgurl={xmlElems.length > 0 && elem.imgurl}
         price={xmlElems.length > 0 && elem.price}
       />
     ))
   };
   */
  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col xs={12}>ALL SEASONS TIRES  </Col>
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

/*
Tutaj jest kod z uzyciem forEach, problem jest taki sam jak w przypadku wywolania funkcji w której jest map,
czyli elementy nie renderuja się, a przy sprawdzaniu w konsoli Jsx zostal dodany do tablicy, dodalem do 
useEffecta zmienna testbut która triggerowałem przyciskiem i o tyle o ile w konsoli pokazywało długość tablicy
to na stronie pokazywalo dlugość tablicy nadal 0 . 

 const productArray = [];

const pushItems = (item, index) => {
  productArray[index] = packElem(index);
};

const packElem = (index) => {
  return (
    <ShopItem
      title={xmlElems[index].desc}
      prod={xmlElems[index].producent}
      imgurl={xmlElems[index].imgurl}
      price={xmlElems[index].price}
    />
  )
}

useEffect(() => {
  if (xmlElems.length > 0) {
    xmlElems.forEach(pushItems);
    console.log(productArray[2]);
  }
}, [testBut])

*/