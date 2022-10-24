const searchEmployee = require('./bonus_searchEmployee');

describe('Busca dados do colaborador', () => {

  it('Verifica existência da função', () => {
    expect(searchEmployee).toBeDefined;
  });

  it('Verifica Tipagem da função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Retorna mensagem de erro se ID não encontrado', () => {
    expect(searchEmployee('0123-4', 'firstname')).toBe('ID não identificada');
  });

  it('Retorna mensagem de erro se info desejada não existir', () => {
    expect(searchEmployee('1256-4', 'xablau')).toBe('Informação indisponível');
  });

  it('', () => {
    expect(searchEmployee('1256-4', 'specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
  });

});