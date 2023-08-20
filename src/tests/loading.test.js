import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../components/Loading/Loading'; // Verifique o caminho correto

test('renderiza o ícone de carregamento', () => {
  const { getByTestId } = render(<Loading />);
  const loadingIcon = getByTestId('loading-icon'); // Certifique-se de adicionar o atributo 'data-testid' no ícone de carregamento no componente Loading

  expect(loadingIcon).toBeInTheDocument();
});
