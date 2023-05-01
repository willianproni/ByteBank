import { render, screen } from '@testing-library/react';
import Menu from '.';

describe('<Menu/>', () => {
  it('Deve renderizar um link para a página inicial', () => {
    render(<Menu />);
    expect(screen.getByText('Inicial')).toBeInTheDocument();
  });

  it('Renderizar todos os links', () => {
    render(<Menu />);
    expect(screen.getAllByRole('link')).toHaveLength(4);
  });

  it('Não deve renderizar o link para extrato', () => {
    render(<Menu />);
    expect(screen.queryByText('extrato')).not.toBeInTheDocument();
  });

  it('Renderizar os link e verificar se estão com className link', () => {
    render(<Menu />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveClass('link');
    });
    expect(links).toMatchSnapshot();
  });

  //   it('Hover ao passar o mouse pelos titulos do menu', () => {
  //     render(<Menu />);
  //     fireEvent.mouseOver(screen.getByText('Inicial'));
  //     expect(screen.getByText('Inicial')).toHaveStyle({
  //       color: 'rgb(0, 0, 0)',
  //     });
  //   });
});
