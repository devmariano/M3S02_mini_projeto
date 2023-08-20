import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Certifique-se de importar o BrowserRouter
import NavBar from '../components/NavBar/navBar';

test('renderiza navbar e botoes corretamente', () => {
  const { getByText } = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const inicioButton = getByText('INICIO');
  const produtosButton = getByText('PRODUTOS');

  expect(inicioButton).toBeInTheDocument();
  expect(produtosButton).toBeInTheDocument();
});
