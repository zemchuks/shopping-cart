import React, { Component, Fragment } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header/Header'
import Store from './components/product/index'
import About from './components/pages/About'
import Cart from './components/cart/Cart'
import ProductState from './context/products/ProductState'
import CartState from './context/cart/CartState'


class App extends Component {
  // state={ 
  //   products: []
  // }

  // async componentDidMount() {
  //   try {
  //     const res = await fetch('https://fakestoreapi.com/products') 
  //     const resData  = await res.json();
  //     this.setState({ products: resData })

  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  render() {
    return (
      <ProductState>
        <CartState>
      <Router>
        <Switch>
      <Fragment>
        <Header />
        <div className='container'>
          <Route exact path='/' component={Store} />
          <Route path='/about' component={About}  />
          <Route path='/cart' component={Cart} />
         
        </div>
      </Fragment>
      </Switch>
      </Router>
      </CartState>
      </ProductState>
    );
  }
  
}

export default App;