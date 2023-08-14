import React, { useContext } from 'react';
import {BsCart2} from 'react-icons/bs';
import './CartButton.css';
import AppContext from '../context/AppContext';

function CartButton() {

  const {cartItems} = useContext(AppContext);

  return (  
    <button type="button" className="cart__button">
      <BsCart2/>
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;
