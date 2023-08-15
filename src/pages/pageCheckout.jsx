import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';


function PageCheckout () {
  return (
    <div>
      <Header />
      <div className="container"></div>
      <Cart />
      <Footer />
    </div>
  );
}



export default PageCheckout;
