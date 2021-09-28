import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import './header.styles.scss'



const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className="logo" style={{ width: 50 }} />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/'>CONTACT</Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                        :
                        <Link className="option" to='/signin'>
                            SIGN IN
                        </Link>
                }
                {/* <Link className="option" to='/'>CART</Link> */}

                <CartIcon />
            </div>
            {hidden ? null : (<CartDropdown />)}
            
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser
// });
// viet ngan lai ===>
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);