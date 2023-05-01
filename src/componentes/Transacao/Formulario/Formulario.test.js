import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('<Formulario/>', () => {
  it('Renderizar uma imput', () => {
    render(<Formulario />);

    expect(screen.getByPlaceholderText('Digite um valor')).toBeInTheDocument();
  });

  it('Renderiza um input com o tipo númerico', () => {
    render(<Formulario />);

    expect(screen.getByPlaceholderText('Digite um valor')).toHaveAttribute(
      'type',
      'number'
    );
  });

  it('should ', () => {
    render(<Formulario />);

    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '50');
    expect(campoTexto).toHaveValue(50);
  });
});
