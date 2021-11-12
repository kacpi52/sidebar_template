import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import './stylingMenu.css';

const Menu = () => {
    return (
        <div className='MenuContainer'>
            <Container>
                <Row>
                    <Col xs={1} className='MenuButton' > MENU </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Menu;
