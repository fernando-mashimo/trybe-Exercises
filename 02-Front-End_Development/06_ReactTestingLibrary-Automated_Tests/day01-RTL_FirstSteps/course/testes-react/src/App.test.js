import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Sem userEvent - testa a renderização dos elementos', () => {
  test('Verifica se existe input de Email', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail.type).toBe('email');
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  
  // test('Verifica a existência de um botão', () => {
  //   render(<App />);
  //   const button = screen.getByRole('button');
  //   expect(button).toBeInTheDocument();
  // });
  
  test('Verifica a existência de 2 botões', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
  
  test('Verifica a existência de botão "Enviar"', () => {
    render(<App />);
    const button = screen.getByTestId('id-send');
    expect(button).toBeInTheDocument();
    expect(button).toHaveProperty('type', 'button');
    expect(button.value).toBe('Enviar');
  });
  
  test('Verifica a existência de botão "Voltar"', () => {
    render(<App />);
    const button = screen.getByTestId('id-back');
    expect(button).toBeInTheDocument();
    expect(button).toHaveProperty('type', 'button');
    expect(button.value).toBe('Voltar');
  });
});

describe('Com userEvent - testa o comportamento dos elementos a partir da interação com o usuário', () => {
  test('Verifica que, ao digitar o email e apertar "Enviar", o email é renderizado na tela', () => {
    // #1 sempre: acessar os elementos da tela
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    const button = screen.getByTestId('id-send');
    const userEmail = screen.getByTestId('id-email-user');
    
    // #2: interagir com os elementos, simulando o comportamento da pessoa usuária
    userEvent.type(inputEmail, 'fernando.mashimo@yahoo.com.br');
    userEvent.click(button);

    // #3: testar efetivamente, ou seja, verificar a materialização dos elementos e do comportamento esperado
    expect(inputEmail).toHaveValue('');
    expect(userEmail).toHaveTextContent('Valor: fernando.mashimo@yahoo.com.br');
  });
});