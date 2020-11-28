import React, { useContext, useEffect, useState, Fragment } from 'react';
import ProductContext from '../../context/products/ProductContext'
import Products from './Products';
import Spinner from '../layout/Spinner'

const Store = (props) => {
    const [loading, setLoading] = useState(false)
    const productContext = useContext(ProductContext)
    const { loadProducts } = productContext

    useEffect(() => {
            setLoading(true)
            setTimeout(() => {
                
                loadProducts()
                setLoading(false)
            }, 2000)
        //eslint-disable-next-line
    }, [])
    return ( 
        <Fragment>
        <div>
        <div className="text-center mt-5">
            <h1>Store</h1>
            <p>This is the Store Page.</p>
        </div>
        {loading ? <Spinner /> : <Products />}
        </div>
        
        </Fragment> 
        
     );
}
 
export default Store 