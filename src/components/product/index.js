import React, { useContext, useEffect } from 'react';
import ProductContext from '../../context/products/ProductContext'
import Products from './Products';

const Store = (props) => {
    const productContext = useContext(ProductContext)
    const { loadProducts } = productContext

    useEffect(() => {
        loadProducts()
        //eslint-disable-next-line
    }, [])
    return ( 
            <div >
                <div className="text-center mt-5">
                    <h1>Store</h1>
                    <p>This is the Store Page.</p>
                </div>
                <Products />
            </div>
        
     );
}
 
export default Store 