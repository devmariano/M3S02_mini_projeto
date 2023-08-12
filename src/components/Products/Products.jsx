import React, {useState, useEffect} from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProdutcs';
import ProductCard from '../ProductCard/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
    });
  },[]);
  console.log(products);

  return ( 
    <section className="products container">
      {/* {
        products.map((product) => <p key={product.title}>{product.title}</p>)
      } */}
      {
        products.map((product) => <ProductCard key={product.id} data={product} />)
      }
      
      {/* <ProductCard data={{}}/> */}
    </section>
  );
}

export default Products;
