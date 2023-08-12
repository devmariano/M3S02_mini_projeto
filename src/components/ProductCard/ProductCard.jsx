import React from 'react';

function ProductCard() {
  return ( 
    <section className="product__card">
      <img src="https://http2.mlstatic.com/D_850103-MLB50444835173_062022-W.jpg" alt="product" className="card__image" />
      <div className="card__infos">
        <h2 className="card__price">R$200.00</h2>
        <h2 className="card__tittle">Titulo do card</h2>
      </div>
      <button type="button" className="button_add-cart">+</button>
    </section>
  );
}

export default ProductCard;
