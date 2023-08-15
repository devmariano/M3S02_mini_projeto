import React from 'react';
import SearchBar from '../searchBar/searchBar';
import logo from '../../images/logo_megaoferta.png';

import './Header.css';
import CartButton from '../CartButton/CartButton';


function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-wrapper">
          <img src={logo} alt="Logotipo" />
        </div>
        <SearchBar/>
        <CartButton/>
      </div>
    </header>
  );
}

export default Header;
