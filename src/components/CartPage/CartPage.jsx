import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import './CartPage.css';
import React, { useContext } from 'react';



function CartPage() {

  const {cartItems} = useContext(AppContext);


  return ( 

    <section >
      <span>RESUMO DO CARRINHO</span>
      <div>
        {cartItems.map((cartItem) => <CartItem key={`${cartItem.id}-${Math.floor(Math.random() * 10)}`} data={cartItem} />)}
      </div>
    </section>

  );
}

export default CartPage;
