import React from 'react';
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <button type="button" onClick={toggleCartHidden} className="cart-icon">
        <span>CART</span>
        <span className="item-count"> {itemCount} </span>
    </button>
)

// REDUCE
// function reducer(accumulator, currentValue, currentIndex, array) {}
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)