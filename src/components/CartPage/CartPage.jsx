import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import './CartPage.css';
import React, { useContext } from 'react';
import formatCurrency from '../../utils/formatCurrency';



function CartPage() {

  const { cartItems, totalPrice } = useContext(AppContext);

  return ( 

    <div>
      <span className="cart-info container">breadcrumb</span>
      <section className="cart-page container">
        <div className="cart-box">
          <span className="cart-resume-title">RESUMO DO CARRINHO</span>
          <div>
            {cartItems.map((cartItem) => <CartItem key={`${cartItem.id}-${Math.floor(Math.random() * 10)}`} data={cartItem} />)}
          </div>
        </div>
        <div className="cart-box">
          <div className="cart-resume-price">{formatCurrency(totalPrice, 'BRL')}</div>
          <button>Voltar as compras</button>
          <button>Prosseguir ao checkout</button>
        </div>
      </section>
    </div>

  );
}

export default CartPage;
