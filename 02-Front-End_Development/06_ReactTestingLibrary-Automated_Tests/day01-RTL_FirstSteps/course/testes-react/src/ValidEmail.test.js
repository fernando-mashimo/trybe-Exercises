import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './components/ValidEmail';

describe('Teste o componente ValidEmail', () => {
  test('Testando componente, caso o email seja válido.', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={EMAIL_USER} />);

    const isValid = screen.getByText('Email Válido');
    const userEmail = screen.getByTestId('id-email-user');

    expect(userEmail).toHaveTextContent('Valor: email@email.com');
    expect(isValid).toBeInTheDocument();
  });

  test('Testando componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'email-email.com';
    render(<ValidEmail email={EMAIL_USER} />);

    const isNotValid = screen.getByText('Email Inválido');
    const userEmail = screen.getByTestId('id-email-user');

    expect(userEmail).toHaveTextContent('Valor: email-email.com');
    expect(isNotValid).toBeInTheDocument();
  });

  test('Testando componente, caso não seja informado email.', () => {
    const EMAIL_USER = '';
    render(<ValidEmail email={EMAIL_USER} />);

    const emailValidity = screen.queryByTestId('id-is-email-valid');

    expect(emailValidity).not.toBeInTheDocument();
  });

  test('Verificar cor da frase é verde se o email informado for válido', () => {
    const EMAIL_USER_isVALID = 'teste@teste.com';
    
    render(<ValidEmail email={EMAIL_USER_isVALID} />);

    const message = screen.queryByTestId('id-is-email-valid');

    expect(message).toHaveAttribute('class', 'green-text');
  });

  test('Verificar cor da frase é vermelha se o email informado for válido', () => {
    const EMAIL_USER_isNotVALID = 'ASDF';
    
    render(<ValidEmail email={EMAIL_USER_isNotVALID} />);

    const message = screen.queryByTestId('id-is-email-valid');

    expect(message).toHaveAttribute('class', 'red-text');
  });
});


