
import AppContext from '../../context/AppContext';
import './Checkout.css';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';
import { BsCart2, BsCreditCard, BsFillCheckCircleFill, BsArrowRight } from 'react-icons/bs';



function Checkout() {

  const { cartItems, totalPrice } = useContext(AppContext);

  const [payment, setPayment] = useState(false);

  console.log(setPayment);
  return (

    <div>
      <span className="checkout-info container">
        <span className="checkout-info-detail"><BsCart2 /> Carrinho</span>
        <span className="checkout-info-detail"><BsArrowRight /></span>
        <span className="checkout-info-detail" ><BsCreditCard /> Pagamento</span>
        <span><BsArrowRight /></span>
        <span><BsFillCheckCircleFill /> Concluído</span>
      </span>
      <section className="checkout-page container">
        <div className="checkout-box-list">
          <span className="checkout-resume-title">FORMA DE PAGAMENTO</span>
          {payment ? (
            <p>PAGAMENTO REALIZADO COM SUCESSO</p>
          ) : (
            <div className="checkout-resume-list">
              <div className="payment-metod"> Visa </div>
            </div>
          )
          }

        </div>
        <div className="checkout-box-action">
          <div className="checkout-resume-title">TOTAL DA COMPRA</div>
          <div className="checkout-resume-price">{formatCurrency(totalPrice, 'BRL')}</div>
          <div className="checkout_page_buttons">
            <Link to={'/carrinho'} className="return-button">VOLTAR AO CARRINHO</Link>
            {cartItems.length === 0 ? (
              <p> </p>
            ) : (
              <Link to={'/checkout'} className="checkout-button">CONTINUAR</Link>
            )}
          </div>
        </div>
      </section>
    </div>

  );
}

export default Checkout;
