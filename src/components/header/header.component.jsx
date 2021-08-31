import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg'

import './header.styles.scss'

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className="logo" style={{width: 50}}/>
            </Link>
            <div className="options">
                <Link className="option" to ='/shop'>SHOP</Link>
                <Link className="option" to ='/'>CONTACT</Link>
                <Link className="option" to ='/'>SINGIN</Link>
                <Link className="option" to ='/'>CART</Link>
            </div>
        </div>
    )
}

export default Header