import React, { useReducer } from 'react'
import CartContext from './CartContext'
import cartReducer, { sumItems } from './cartReducer'
import { INCREASE, DECREASE, ADD_ITEM, REMOVE_ITEM, CLEAR, CHECKOUT } from '../types'

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const CartState = props => {
    const initialState = {
        cartItems: storage, ...sumItems(storage),
        checkout: false 
    }
   
    const [state, dispatch] = useReducer(cartReducer, initialState)

      const increase = payload => {
        dispatch({
            type: INCREASE, 
            payload
        })
    }
    const decrease = payload => {
      dispatch({
        type: DECREASE, 
        payload
      })
  }

      const removeProduct = payload => {
        dispatch({type: REMOVE_ITEM, payload})
    }

      const clearCart = () => {
        dispatch({type: CLEAR})
    }

    const handleCheckout = () => {
        console.log(CHECKOUT, state);
        dispatch({type: CHECKOUT})
    }

      const addProduct = payload => {
        dispatch({
            type: ADD_ITEM, 
            payload
        })
      }

    return  <CartContext.Provider value={{ 
        
        ...state,
        increase,
        decrease,
        removeProduct,
        clearCart,
        handleCheckout,
        addProduct
    }}>
        {props.children}
    </CartContext.Provider>
    
}

export default CartState