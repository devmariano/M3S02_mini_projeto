import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import * as AppContext from '../context/AppContext';

// Mock o módulo do contexto inteiro
jest.mock('../context/AppContext');

test('renderiza o header corretamente', () => {
  // Configure o retorno mockado do useContext
  AppContext.useContext.mockReturnValue({
    cartItems: [
      {
        'id': 'MLB3388244719',
        'title': 'Notebook Acer Nitro 5 An515-58w3 I5 8gb 512gb Rtx3050 15.6',
        'thumbnail': 'http://http2.mlstatic.com/D_951215-MLU70292400551_072023-I.jpg',
        'currency_id': 'BRL',
        'price': 4840,
        'quantity': 2,
      }
    ], // Valores simulados para o teste
    isCartVisible: false,
    setIsCartVisible: jest.fn(),
  });

  const { getByAltText, queryByTestId } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  // Seu código de teste aqui

  // Exemplo de verificação: Verifique se a imagem do logo está presente
  const logoImage = getByAltText('Logotipo');
  expect(logoImage).toBeInTheDocument();

  // Exemplo de verificação: Verifique se o componente SearchBar não está presente na rota de carrinho
  const searchBar = queryByTestId('search-bar'); // Usar queryByTestId para verificar se não está presente
  expect(searchBar).toBeNull();

  // Exemplo de verificação: Verifique se o componente CartButton está presente
  const cartButton = getByTestId('cart-button');
  expect(cartButton).toBeInTheDocument();
});
