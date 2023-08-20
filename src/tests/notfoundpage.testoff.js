import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageNotFound from '../pages/pageNotFound'; // Verifique o caminho correto
import AppContext from '../context/AppContext';

test('renderiza corretamente os elementos da página de not found', () => {
  // Simule os valores do contexto que você espera para o teste
  const mockContextValues = {
    cartItems: [
      {
        'id': 'MLB3388244719',
        'title': 'Notebook Acer Nitro 5 An515-58w3 I5 8gb 512gb Rtx3050 15.6',
        'thumbnail': 'http://http2.mlstatic.com/D_951215-MLU70292400551_072023-I.jpg',
        'currency_id': 'BRL',
        'price': 4840,
        'quantity': 2,
      },
    ],
    isCartVisible: true,
    setIsCartVisible: jest.fn(), // Função simulada
  };

  // Renderize o componente envolto pelo provedor de contexto simulado e MemoryRouter
  const { getByText, getByAltText } = render(
    <MemoryRouter>
      <AppContext value={mockContextValues}>
        <PageNotFound />
      </AppContext>
    </MemoryRouter>
  );

  // Verifique se os elementos da página de not found estão presentes
  const notFoundText = getByText('Ops! Página não encontrada.');
  const notFoundImage = getByAltText('404 Not Found');
  const notFoundSuggestion = getByText('Que tal explorar outras páginas?');

  expect(notFoundText).toBeInTheDocument();
  expect(notFoundImage).toBeInTheDocument();
  expect(notFoundSuggestion).toBeInTheDocument();
});
