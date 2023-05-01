import { render, screen } from '@testing-library/react';
import Cabecalho from '.';

test('Renderizar o nome do usuário logado', () => {
  render(<Cabecalho />);

  const nomeUsuario = screen.getByText('Willian Fernando Proni');

  expect(nomeUsuario).toBeInTheDocument();
});
