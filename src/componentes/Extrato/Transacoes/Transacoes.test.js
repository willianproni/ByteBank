import { render, screen } from '@testing-library/react';
import Transacoes from '.';
import estilos from '../Extrato.module.css';
describe('<Transacoes/>', () => {
  it('Deve renderizar o componente com props atualizadas', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 100,
    };

    const { rerender } = render(
      <Transacoes transacao={transacao} estilos={estilos} />
    );
    const tipoTransacao = screen.getByTestId('tipoTransacao');
    const valorTransacao = screen.getByTestId('valorTransacao');

    expect(tipoTransacao).toHaveTextContent('Depósito');
    expect(valorTransacao).toHaveTextContent('R$ 100');

    const Novatransacao = {
      transacao: 'Transferência',
      valor: 50,
    };
    rerender(<Transacoes transacao={Novatransacao} estilos={estilos} />);
    const novaTipoTransacao = screen.getByTestId('tipoTransacao');
    const novoValorTransacao = screen.getByTestId('valorTransacao');

    expect(novaTipoTransacao).toHaveTextContent('Transferência');
    expect(novoValorTransacao).toHaveTextContent('- R$ 50');
  });
});
