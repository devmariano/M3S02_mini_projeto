import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar/SearchBar';
import Provider from '../context/Provider'; 
import { BrowserRouter } from 'react-router-dom';

test('renderiza o componente SearchBar corretamente', () => {
  const mockSetProducts = jest.fn();
  const mockSetLoading = jest.fn();

  const { getByPlaceholderText, getByTestId } = render(
    <BrowserRouter>
      <Provider value={{ setProducts: mockSetProducts, setLoading: mockSetLoading }}>
        <SearchBar />
      </Provider>
    </BrowserRouter>
  );

  // Verifique se o campo de pesquisa está presente
  const searchInput = getByPlaceholderText('Buscar Produtos');
  expect(searchInput).toBeInTheDocument();

  // Verifique se o botão de pesquisa está presente
  const searchButton = getByTestId('search__button');
  expect(searchButton).toBeInTheDocument();

  // Dispare o evento de envio do formulário
  fireEvent.submit(searchButton);

  // Simule o clique no botão de busca
  fireEvent.click(searchButton);

  // Simule a digitação no campo de busca
  fireEvent.change(searchInput, { target: { value: 'produto' } });

});
