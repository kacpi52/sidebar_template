import React, {useState} from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './stylingMenu.scss';

const LoginPanel = ({showLoginPanel,toggleLoginPanel}) => {
    return (
        <div className={toggleLoginPanel? 'loginPanelContainer' : 'loginPanelContainerHidden'}>
            <div className="Panel">
                <p>Login</p>
                <p>Password</p>
                <p className='submitButton' onClick={showLoginPanel}>Submit</p>
                <Link to='/UserPage'  className='registerButton' onClick={showLoginPanel}>REGISTER</Link>
            </div>
        </div>
        
    );
};

const Menu = () => {
    const [toggleMenu, settoggleMenu] = useState(false),
    [toggleLoginPanel, settoggleLoginPanel] = useState(false);
    const showMenu = () => {
        settoggleMenu(!toggleMenu);
        console.log(toggleMenu);
    }
    
    const showLoginPanel = () =>{
        settoggleLoginPanel(!toggleLoginPanel);
        console.log(toggleLoginPanel);
    };
    const toggleBoth = () =>{
        showMenu();
        showLoginPanel();
    };
    return (
        <div className='menuContainer'>
            <Container>
                <Row>
                    <Col xs={1} className='menuButton' onClick={showMenu}> {toggleMenu? 'CLOSE' : 'MENU'} </Col>
                </Row>
            </Container>
            <div className={toggleMenu? 'sidebar' : 'sidebarHidden'}>
                <ul>
                    <li><Link to='/' onClick={showMenu} className='homePageLink'>Home Page</Link></li>
                    <li>Our projects</li>
                    <li>About Us </li>
                    <li onClick={toggleBoth}>User Panel </li>
                    
                </ul>
            </div>
            <LoginPanel showLoginPanel={showLoginPanel} toggleLoginPanel={toggleLoginPanel}/> 
        </div>
    )
}

export default Menu;
