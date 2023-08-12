import React from 'react';
import {BsCart2} from 'react-icons/bs';
import './CartButton.css';

function CartButton() {
  return (  
    <button type="button" className="cart__button">
      <BsCart2/>
      <span className="cart-status">10</span>
    </button>
  );
}

export default CartButton;
