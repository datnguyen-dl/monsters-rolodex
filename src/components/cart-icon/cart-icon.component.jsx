import React from 'react';
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <button type="button" onClick={toggleCartHidden} className="cart-icon">
        <span>CART</span>
        <span className="item-count"> {itemCount} </span>
    </button>
)



const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

// REDUCE
// function reducer(accumulator, currentValue, currentIndex, array) {}
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)