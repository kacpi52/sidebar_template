import React from 'react'
import Menu from '../Components/SidebarMenu/Menu'

const fs = require('fs');  // file system - dostep do plikow na dysku 
const parser = require('xml2json');
const tireData = require('../xml/opony.xml');


const Shop = () => {
    fs.readFile(tireData, (err,data)=>{
        let json = parser.toJson(data);
        console.log(json);
    })
    return (
        <>
        <Menu/>
            <p1>Shop</p1>
            
        </>
    )
}

export default Shop
