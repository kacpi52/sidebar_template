import React  from 'react';
import './ShopItem.scss';
import {Col, Image} from 'react-bootstrap';
const ShopItem = ({title, prod, imgurl, price}) => {
    
    return (
        <Col xs={12} md={6} lg={4} >
            <div className="item">
                <p>{prod}</p>
                <Image rounded src={imgurl} className='item__image' />
                <p>{title}</p>
                <p>{price} zł/sztuka </p>
            </div>
        </Col>
    )
}

export default ShopItem;


