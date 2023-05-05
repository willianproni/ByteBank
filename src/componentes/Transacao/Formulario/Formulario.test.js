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

  it('Verifica se a input recebeu o valor digitado', () => {
    render(<Formulario />);

    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '50');
    expect(campoTexto).toHaveValue(50);
  });

  it('Deve chamar um evento de OnSubmit ao clicar em realizar transação', () => {
    const realizarTransacao = jest.fn();

    render(<Formulario realizarTransacao={realizarTransacao} />);
    const botao = screen.getByRole('button');

    userEvent.click(botao); //Realizo a ação
    expect(realizarTransacao).toHaveBeenCalledTimes(1);
  });

  it('Realizar a seleção de uma opção de transação', () => {
    render(<Formulario />);

    const select = screen.getByTestId('select-opcoes');

    userEvent.selectOptions(select, ['Depósito']);

    expect(screen.getByRole('option', { name: 'Depósito' }).selected).toBe(
      true
    );
    expect(screen.getByRole('option', { name: 'Transferência' }).selected).toBe(
      false
    );
  });
});
