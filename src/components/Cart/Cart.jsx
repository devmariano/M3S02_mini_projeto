import React, { useContext } from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {

  const {cartItems, isCartVisible } = useContext(AppContext);
  // acc é o acumulador do reduce, neste caso começa com 0
  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc;
  },0);

  return ( 
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <span className="cart-items-title">RESUMO DO CARRINHO</span>
      <div className="cart-items">
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;
