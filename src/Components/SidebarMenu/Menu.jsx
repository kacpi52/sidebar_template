import React, {useState} from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import './stylingMenu.css';

const Menu = () => {
    const [toggleMenu, settoggleMenu] = useState(false);
    const showMenu = () => {
        settoggleMenu(!toggleMenu)
        console.log(toggleMenu);
    }
    return (
        <div className='MenuContainer'>
            <Container>
                <Row>
                    <Col xs={1} className='MenuButton' onClick={showMenu}> {toggleMenu? 'CLOSE' : 'MENU'} </Col>
                </Row>
            </Container>
            <div className={toggleMenu? 'Sidebar' : 'SidebarHidden'}>
                <ul>
                    <li>Home Page</li>
                    <li>Videos</li>
                    <li>About Us </li>
                    <li onClick={showMenu}>CLOSE MENU </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;
