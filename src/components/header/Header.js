import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import CartContext  from '../../context/cart/CartContext';
import {CartIcon} from '../icons';
import styles from './header.module.scss';
import 'bootswatch/dist/lux/bootstrap.css'

const Header = () => {

    const cartContext = useContext(CartContext)
    const { itemCount } = cartContext
 

    return ( 
        <header className={styles.header}>
            <Link to='/'>Store</Link>
            <Link to='/about'>About</Link>
            <Link to='/cart'> <CartIcon/> Cart({itemCount})</Link>
        </header>
     );
}
 
export default Header;