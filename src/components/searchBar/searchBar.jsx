import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './searchBar.css';
import fetchProducts from '../../api/fetchProdutcs';

function SearchBar() {
  const[searchValue, setSearchValue] = useState('');

  const handleSearch = async(event) => {
    event.preventDefault();

    const products = await fetchProducts(searchValue);
    console.log(products);
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
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
