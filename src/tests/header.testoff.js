import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header/Header'; // Verifique o caminho correto
import Provider from '../context/Provider'; 

test('renderiza o componente Header corretamente', () => {
  // Simule os valores do contexto que você espera para o teste
  const mockContextValues = {
    cartItems: [
      {
        id: 'MLB3388244719',
        title: 'Notebook Acer Nitro 5 An515-58w3 I5 8gb 512gb Rtx3050 15.6',
        thumbnail: 'http://http2.mlstatic.com/D_951215-MLU70292400551_072023-I.jpg',
        currency_id: 'BRL',
        price: 4840,
        quantity: 1,
      },
    ],
    isCartVisible: true,
    totalPrice: 4840, // Simule o valor total do carrinho
  };

  // Renderize o componente envolto pelo provedor de contexto simulado e MemoryRouter
  const { getByAltText, queryByTestId } = render(
    <MemoryRouter>
      <Provider value={mockContextValues}>
        <Header />
      </Provider>
    </MemoryRouter>
  );

  // Verifique se o logotipo está presente
  const logoImage = getByAltText('Logotipo');
  expect(logoImage).toBeInTheDocument();

  // Verifique se o componente SearchBar não está presente na rota de carrinho
  const searchBar = queryByTestId('search-bar');
  expect(searchBar).toBeNull();

  // Verifique se o componente CartButton está presente
  const cartButton = queryByTestId('cart-button');
  expect(cartButton).toBeInTheDocument();