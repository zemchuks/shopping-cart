import React, { useReducer } from 'react'
import ProductContext from './ProductContext'
import { ProductReducer } from './productReducer'
import { LOAD_ITEMS } from '../types'

const ProductState = props => {
    const initialState = {
        products: []    
    }
   
    const [state, dispatch] = useReducer(ProductReducer, initialState)

     const loadProducts = async () => {        
          const res = await fetch('https://fakestoreapi.com/products');
          const data = await res.json();
          dispatch({
                type: LOAD_ITEMS,
                payload: data
            });                 
      }

    return <ProductContext.Provider value={{ 
        products: state.products,
        loadProducts
    }}>
        {props.children}
    </ProductContext.Provider>
}

export default ProductState