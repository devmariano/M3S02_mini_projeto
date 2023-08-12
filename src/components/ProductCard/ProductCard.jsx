import React from 'react';
import './ProductCard.css';
import {BsCartPlusFill} from 'react-icons/bs';
import propTypes from 'prop-types';

function ProductCard({data}) {
  const {title, thumbnail, price}  = data;
  return ( 
    <section className="product-card">
      <img 
        src={thumbnail} 
        alt="product" 
        className="card__image" 
      />

      <div className="card__infos">
        <h2 className="card__price">{price}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button type="button" className="button__add-cart">
        <BsCartPlusFill/>
      </button>
      
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
