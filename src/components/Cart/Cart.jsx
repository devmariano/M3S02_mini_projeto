import React from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';

function Cart() {
  return ( 
    <section className="cart">
      <div className="cart-items">
        <CartItem data={{thumbnail: 'https://http2.mlstatic.com/D_918579-MLM51559384401_092022-W.jpg', title: 'teste', price: '234.98'}} />
      </div>

      <div className="cart-resume">Resumo do carrinho</div>
    </section>
  );
}

export default Cart;
