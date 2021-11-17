import React from 'react';
import './LoginPanel.scss';
import { Link } from 'react-router-dom';

const LoginPanel = ({showLoginPanel, toggleLoginPanel}) => {
    return (
        <div className={toggleLoginPanel ? 'loginPanel' : 'loginPanel--hidden'}>
            <div className="loginPanel__Elements">
                <p>Login</p>
                <p>Password</p>
                <p className='loginPanel__Elements__button' onClick={showLoginPanel}>Submit</p>
                <Link to='/UserPage' className='loginPanel__Elements__register' onClick={showLoginPanel}>REGISTER</Link>
            </div>
        </div>
    )
}

export default LoginPanel
