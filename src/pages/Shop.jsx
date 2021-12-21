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
            imgurl: elem.getElementsByTagName("imgs"),
            attr: elem.getAttribute("attrs").getElementsByName("Producent")
          };
        });
        setXmlElems(xmlElemsArr);
        console.log(xmlElemsArr[0].imgurl)
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
      {xmlElems.map((elem, i) => (
        <h4 key={i}>{elem.attr}</h4>
      ))}
    
      
    </>
  );
};

export default Shop;
