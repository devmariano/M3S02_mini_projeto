import React from 'react';
import SearchBar from '../searchBar/searchBar';
import logo from '../../images/logo_megaoferta.png';
import './Header.css';
import CartButton from '../CartButton/CartButton';
import NavBar from '../NavBar/navBar';


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
      <NavBar/>
    </header>
  );
}

export default Header;
