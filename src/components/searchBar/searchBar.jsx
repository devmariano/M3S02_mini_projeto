import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './searchBar.css';

function SearchBar() {
  const[searchValue, setSearchValue] = useState('');

  return (
    <form className="search-bar">
      <input 
        type="search" 
        value={searchValue}
        className="searh__input" 
        placeholder="Buscar Produtos"
        onChange={ ({target}) => setSearchValue(target.value) }
        required
      />
      <button type="submit" className="search__button">
        <BsSearch/>
      </button>
    </form>
  );
}

export default SearchBar;
