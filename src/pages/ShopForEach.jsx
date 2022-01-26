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
    const productArray = [];
    const [xmlElems, setXmlElems] = useState([]);
    const [testBut, setTestBut] = useState(0);


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

    const pushItems = (item, index) => {
        productArray[index] = packElem(index);
    };

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

    useEffect(() => {
        if (xmlElems.length > 0) {
            xmlElems.forEach(pushItems);
            console.log(productArray[2]);
        }
    }, [testBut])


    return (
        <>
            <Menu />
            <Container>
                <Row>
                    <Col xs={12}>ALL SEASON TIRES </Col>
                </Row>
                <Row>
                    {productArray}
                    {productArray.length}
                    {testBut}
                </Row>
                <Button onClick={() => { setTestBut(testBut + 1) }} />
            </Container>

        </>
    );
};

export default Shop;

