
import AppContext from '../../context/AppContext';
import './Checkout.css';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';
import { BsCart2, BsCreditCard, BsFillCheckCircleFill, BsArrowRight } from 'react-icons/bs';
import { FaCcVisa, FaCcMastercard, FaBarcode } from 'react-icons/fa';
import {MdOutlinePix} from 'react-icons/md';




function Checkout() {

  const { cartItems, totalPrice, totalItems } = useContext(AppContext);

  const [payment, setPayment] = useState(false);

  const [selectedPayment, setSelectedPayment] = useState(''); 

  const paymetods = [
    { type: 'Visa', name: 'VISA', icon: <FaCcVisa className="icon"/> },
    { type: 'Mastercard', name: 'MASTERCARD', icon: <FaCcMastercard className="icon"/> },
    { type: 'Pix', name: 'PIX', icon: <MdOutlinePix className="icon"/> },
    { type: 'Boleto', name: 'BOLETO', icon: <FaBarcode className="icon"/> }
  ];

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value); 
    console.log(selectedPayment);
  };

  const handlePay = () => {
    console.log(selectedPayment);
  };

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
          <span className="checkout-resume-title">COMO VOCÊ PREFERE PAGAR?</span>
          {payment ? (
            <p>PAGAMENTO REALIZADO COM SUCESSO</p>
          ) : (
            <form className="form-checkout">
              {paymetods.map((paymetod) => (
                <div key={paymetod.type} className="checkout-radio">
                  <div className="select-metod">
                    <input
                      type="radio"
                      value={paymetod.type}
                      checked={selectedPayment === paymetod.type} // Define se está selecionado com base no estado
                      onChange={handlePaymentChange} // Atualiza o estado quando o usuário seleciona um método
                    />  {paymetod.icon} 
                    <span className="checkout-pay-tittle">{paymetod.name}</span>
                  </div>
                </div>
              ))}
            </form>
          )
          }

        </div>
        <div className="checkout-box-action">
          <div className="checkout-resume-itens">Quantidade: {totalItems} Itens</div>
          <div className="checkout-resume-title">VALOR TOTAL</div>
          <div className="checkout-resume-price">{formatCurrency(totalPrice, 'BRL')}</div>
          <div className="checkout_page_buttons">
            <Link to={'/carrinho'} className="return-button">VOLTAR AO CARRINHO</Link>
            {cartItems.length === 0 ? (
              <p> </p>
            ) : (
              <Link to={'/checkout'} className="checkout-button" onClick={handlePay}>REALIZAR PAGAMENTO</Link>
            )}
          </div>
        </div>
      </section>
    </div>

  );
}

export default Checkout;
