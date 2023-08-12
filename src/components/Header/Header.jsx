import React from 'react';
import SearchBar from '../searchBar/searchBar';

import './Header.css';


function Header() {
  return (
    <header className="header">
      <div className="container">
      
        <SearchBar/>
        <button>cart</button>
      </div>
    </header>
  );
}

export default Header;
