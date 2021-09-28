import React from 'react';
import {connect} from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden}) => (
    <button type="button" onClick={toggleCartHidden} className="cart-icon">
        <span>CART</span>
        <span className="item-count"> 0 </span>
    </button>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(null, mapDispatchToProps)(CartIcon)