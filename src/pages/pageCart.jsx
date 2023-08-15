import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';


function PageCart () {
  return (
    <div>
      <Header />
      <div className="container"></div>
      <Cart />
      <Footer />
    </div>
  );
}



export default PageCart;
