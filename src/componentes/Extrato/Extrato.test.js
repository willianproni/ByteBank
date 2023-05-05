import { render, screen } from '@testing-library/react';
import Extrato from '.';

describe('<Extrato/>', () => {
  it('Deve renderizar uma lista de Transações', () => {
    const mockTransacao = [
      {
        transacao: 'Depósito',
        valor: 100,
      },
    ];
    render(<Extrato transacoes={mockTransacao} />);
    const lista = screen.getByRole('listitem');
    expect(lista).toBeInTheDocument();
  });
});
