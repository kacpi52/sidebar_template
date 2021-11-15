import React, {useState} from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './stylingMenu.css';

const LoginPanel = ({showLoginPanel,toggleLoginPanel}) => {
    return (
        <div className={toggleLoginPanel? 'LoginPanelContainer' : 'LoginPanelContainerHidden'}>
            <div className="Panel">
                <p>Login</p>
                <p>Password</p>
                <p className='SubmitButton' onClick={showLoginPanel}>Submit</p>
                <Link to='/UserPage'  className='RegisterButton' onClick={showLoginPanel}>REGISTER</Link>
            </div>
        </div>
        
    );
};

const Menu = () => {
    const [toggleMenu, settoggleMenu] = useState(false);
    const showMenu = () => {
        settoggleMenu(!toggleMenu);
        console.log(toggleMenu);
    }
    const [toggleLoginPanel, settoggleLoginPanel] = useState(false);
    const showLoginPanel = () =>{
        settoggleLoginPanel(!toggleLoginPanel);
        console.log(toggleLoginPanel);
    };
    const toggleBoth = () =>{
        showMenu();
        showLoginPanel();
    };
    return (
        <div className='MenuContainer'>
            <Container>
                <Row>
                    <Col xs={1} className='MenuButton' onClick={showMenu}> {toggleMenu? 'CLOSE' : 'MENU'} </Col>
                </Row>
            </Container>
            <div className={toggleMenu? 'Sidebar' : 'SidebarHidden'}>
                <ul>
                    <li><Link to='/' onClick={showMenu} className='HomePageLink'>Home Page</Link></li>
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
