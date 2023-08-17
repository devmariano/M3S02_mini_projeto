import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider( {children} ) {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((acc, item) => {
      return item.price * item.quantity + acc;
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);


  const value= {
    products, 
    setProducts,
    loading, 
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible, 
    setIsCartVisible,
    totalPrice, 
    setTotalPrice
  };

  return ( 
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
