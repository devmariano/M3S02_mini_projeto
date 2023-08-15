import React from 'react';
import './navBar.css';



function NavBar() {
  return (
    <header className="navbar">
      <div className="container">
        <button className="nav-button">INICIO</button>
        <button className="nav-button">PRODUTOS</button>
        <button className="nav-button">CARRINHO</button>
      </div>
    </header>
  );
}

export default NavBar;
