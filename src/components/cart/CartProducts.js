import React, { useContext } from 'react';
import CartContext  from '../../context/cart/CartContext';
import CartItem from './CartItem';

const CartProducts = () => {

    const cartContext = useContext(CartContext);
    const { cartItems } = cartContext

    return ( 
        <div className=''>
            <div className="card card-body border-0">

                {
                    cartItems.map(product =>  <CartItem key={product.id} product={product}/>)
                }

            </div>
        </div>

     );
}
 
export default CartProducts;