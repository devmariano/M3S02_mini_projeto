import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../components/Cart/Cart'; // Verifique o caminho correto
import AppContext from '../context/AppContext';

test('renderiza o componente Cart corretamente', () => {
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
  const { getByText, getByAltText } = render(
    <MemoryRouter>
      <AppContext.Provider value={mockContextValues}>
        <Cart />
      </AppContext.Provider>
    </MemoryRouter>
  );

  // Verifique se os elementos esperados estão presentes no componente renderizado
  const cartItemsTitle = getByText('RESUMO DO CARRINHO');
  expect(cartItemsTitle).toBeInTheDocument();

  // Verifique se o botão de "IR PARA O CARRINHO" está presente
  const goCartButton = getByText('IR PARA O CARRINHO');
  expect(goCartButton).toBeInTheDocument();

  // Coloque aqui outras verificações que você deseja fazer

  // Por exemplo, verifique se os detalhes de cada item do carrinho são exibidos corretamente
  const cartItemTitle = getByText('Notebook Acer Nitro 5 An515-58w3 I5 8gb 512gb Rtx3050 15.6');
  expect(cartItemTitle).toBeInTheDocument();

  // // Verifique se o valor total do carrinho é exibido corretamente
  // const cartResume = getByText('4840.00'); // Substitua pelo valor formatado esperado
  // expect(cartResume).toBeInTheDocument();
});
