import React, { useState, useEffect } from "react";
import Menu from "../Components/SidebarMenu/Menu";

const Shop = () => {
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
            url: elem.getAttribute("url"),
            price: elem.getAttribute("price"),
            weight: elem.getAttribute("weight"),
            img: elem.getAttribute("main")
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
      <Menu />
      <p>Shop</p>
      {xmlElems.map((elem, i) => (
        <h4 key={i}>{elem.url}</h4>
      ))}
      <p>{xmlElems[2].price}</p>
    </>
  );
};

export default Shop;
