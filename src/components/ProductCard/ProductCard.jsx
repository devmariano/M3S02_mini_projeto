import React from 'react';
import './ProductCard.css';
import {BsCartPlusFill} from 'react-icons/bs';

function ProductCard() {
  return ( 
    <section className="product-card">
      <img src="https://http2.mlstatic.com/D_850103-MLB50444835173_062022-W.jpg" alt="product" className="card__image" />
      <div className="card__infos">
        <h2 className="card__price">R$200.00</h2>
        <h2 className="card__title">Titulo do card</h2>
      </div>
      <button type="button" className="button__add-cart">
        <BsCartPlusFill/>
      </button>
    </section>
  );
}

export default ProductCard;
