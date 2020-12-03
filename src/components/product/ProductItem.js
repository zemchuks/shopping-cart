import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/cart/CartContext'
import { formatNumber } from './utils';

 const ProductItem = ({product}) => {
    const [show, setShow] = useState(false)
    const cartContext = useContext(CartContext)

    const { addProduct, cartItems, increase } = cartContext

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    const handleHide = () => {
        if(show === false){
            setShow(true)
        } else{
            setShow(false)
        }
        
    }
        return (
            <div className='card card-body'>
                <h1>{product.category}</h1>

                 <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" 
                src={product.image + '?v=' + product.id} alt=""/>

                <p>{product.title}</p>
                <h3 className="text-left">{formatNumber(product.price)}</h3>
                {show ? <p>{product.description}</p> : null}
                

                <div className="text-center">
                <Link to="/" onClick={handleHide} className="btn btn-link btn-sm mr-2">Details</Link>

                    { isInCart(product) && 
                        <button 
                        onClick={() => increase(product)}
                        className="btn btn-outline-primary btn-sm">Add more</button>
                    } 
                    {
                    !isInCart(product) && 
                        <button 
                        onClick={() => addProduct(product)}
                        className="btn btn-primary btn-sm">Add to cart</button>
                    }

                
            </div>
            </div>
        )
}

export default ProductItem
