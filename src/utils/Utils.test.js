import { calculaNovoSaldo } from '.';

describe('Função Calcula novo saldo', () => {
  it('Recebendo um deposito', () => {
    const valores = {
      transacao: 'Depósito',
      valor: 500,
    };

    const novoSaldoDeposito = calculaNovoSaldo(valores, 1000);
    expect(novoSaldoDeposito).toBe(1500);
  });

  it('Recebendo um Transferência', () => {
    const valores = {
      transacao: 'Transferência',
      valor: 500,
    };

    const novoSaldoTransferencia = calculaNovoSaldo(valores, 1000);

    expect(novoSaldoTransferencia).toBe(500);
  });

  it('Deve retornar o valor do saldo atualizado com o rendimento', () => {
    const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);

    const saldo = 100;

    const novoSaldo = calculaRendimento(saldo);

    expect(novoSaldo).toBe(100.5);
    expect(calculaRendimento).toBeCalled();
    expect(calculaRendimento).toHaveBeenCalledWith(saldo);
  });
});
