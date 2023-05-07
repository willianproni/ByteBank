import { render, screen } from '@testing-library/react';
import Saldo from '.';

describe('<Saldo/>', () => {
  it('Renderizar saldo no valor monetário', () => {
    render(<Saldo saldo={1000} />);

    const renderizacaoSaldo = screen.getByTestId('saldo');
    expect(renderizacaoSaldo).toHaveTextContent('R$ 1000');
  });
});
