import React, { useEffect, useContext} from 'react';
import './Home.css';
import fetchPromoProducts from '../../api/fetchPromoProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Home() {
  const {products, setProducts, loading, setLoading} = useContext(AppContext);

  useEffect(() => {
    fetchPromoProducts('samsung').then((response) => {
      setProducts(response);
      console.log(response);
      setLoading(false);
    });
  },[]);


  return ( 
    (loading && <Loading/>) || (
      <section className="products container">
        Promoções SAMSUMG
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )
  );
}

export default Home;
