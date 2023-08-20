import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer/Footer';

test('renderiza o footer corretamente', () => {
  const { getByAltText, getByText } = render(<Footer />);

  // Verifique se a imagem do logotipo está presente
  const logoImage = getByAltText('Logotipo');
  expect(logoImage).toBeInTheDocument();

  // Verifique se o nome do autor está presente
  const authorName = getByText(/feito por Alexandre Mariano/i);
  expect(authorName).toBeInTheDocument();



  // Verifique se a imagem do avatar está presente
  const avatarImage = getByAltText('Avatar');
  expect(avatarImage).toBeInTheDocument();
});
