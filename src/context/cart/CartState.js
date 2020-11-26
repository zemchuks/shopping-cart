import React, { useReducer } from 'react'
import CartContext from './CartContext'
import cartReducer, { sumItems } from './cartReducer'
import { INCREASE, DECREASE, ADD_ITEM, REMOVE_ITEM, CLEAR, CHECKOUT } from '../types'

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const CartState = props => {
    const initialState = {
        products: [],
        cartItems: storage, ...sumItems(storage)
    }
   
    const [state, dispatch] = useReducer(cartReducer, initialState)

      const increase = payload => {
        dispatch({
            type: INCREASE, 
            payload
        })
    }

      const addProduct = payload => {
        dispatch({
            type: ADD_ITEM, 
            payload
        })
      }

    return <CartContext.Provider value={{ 
        products: state.products,
        cartItems:  state.cartItems,
        increase,
        addProduct
    }}>
        {props.children}
    </CartContext.Provider>
}

export default CartState