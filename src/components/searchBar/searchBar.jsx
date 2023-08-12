import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './searchBar.css';

function SearchBar() {
  return (
    <form className="search-bar">
      <input 
        type="search" 
        className="searh__input" 
        placeholder="Buscar Produtos"
        required
      />

      <button type="submit" className="search__button">
        <BsSearch/>
      </button>
    </form>
  );
}

export default SearchBar;
