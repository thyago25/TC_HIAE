describe('Formulário de Cadastro - Site WPEverest', () => {

  Cypress.on('uncaught:exception', () => false);

  beforeEach(() => {
    cy.visit('https://demo.wpeverest.com/user-registration/simple-registration-form/');
  });

  it('1. Cadastro bem-sucedido', () => {
    const id = Date.now();
    cy.get('#user_login').type(`thyago${id}`);
    cy.get('#user_email').type(`thyago${id}@gmail.com`);
    cy.get('#user_pass').type('12345678');
    cy.get('#user_confirm_password').type('12345678');
    cy.get('button[type="submit"]').click();
    cy.get('.ur-message').should('contain.text', 'User successfully registered.');
  });

  it('2. Erro de senha: senhas diferentes', () => {
    const id = Date.now();
    cy.get('#user_login').type(`thyago${id}`);
    cy.get('#user_email').type(`thyago${id}@gmail.com`);
    cy.get('#user_pass').type('12345678');
    cy.get('#user_confirm_password').type('87654321');
    cy.get('button[type="submit"]').click();
    cy.get('#user_confirm_password-error', { timeout: 5000 })
      .should('contain.text', 'Password and confirm password not matched.');
  });

  it('3. Erro de email obrigatório', () => {
    const id = Date.now();
    cy.get('#user_login').type(`thyago${id}`);
    cy.get('#user_email').clear();
    cy.get('#user_pass').type('12345678');
    cy.get('#user_confirm_password').type('12345678');
    cy.get('button[type="submit"]').click();
    cy.get('#user_email-error', { timeout: 5000 })
      .should('contain.text', 'This field is required.');
  });

  it('4. Erro de email inválido', () => {
    const id = Date.now();
    cy.get('#user_login').type(`thyago${id}`);
    cy.get('#user_email').type('emailinvalido');
    cy.get('#user_pass').type('12345678');
    cy.get('#user_confirm_password').type('12345678');
    cy.get('button[type="submit"]').click();
    cy.get('#user_email-error', { timeout: 5000 })
      .should('contain.text', 'Please enter a valid email address.');
  });

  it('5. Erro de todos os campos em branco', () => {
    cy.get('button[type="submit"]').click();
    cy.get('#user_email-error', { timeout: 5000 })
      .should('contain.text', 'This field is required.');
  });

  it('6.1. Aceita senha com menos de 8 caracteres (comportamento atual)', () => {
    const id = Date.now();
    cy.get('#user_login').type(`thyago${id}`);
    cy.get('#user_email').type(`thyago${id}@gmail.com`);
    cy.get('#user_pass').type('12345');
    cy.get('#user_confirm_password').type('12345');
    cy.get('button[type="submit"]').click();
    cy.get('.ur-message', { timeout: 5000 })
      .should('contain.text', 'User successfully registered.');
  });

  it('6.2. Nome de usuário com mais de 70 caracteres falha silenciosamente (erro 500)', () => {
    const id = Date.now();
    const nomeLongo = 'thyagooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo';

    cy.get('#user_login').type(`${nomeLongo}${id}`.slice(0, 80));
    cy.get('#user_email').type(`thyago${id}@gmail.com`);
    cy.get('#user_pass').type('12345678');
    cy.get('#user_confirm_password').type('12345678');
    cy.get('button[type="submit"]').click();

    cy.get('.ur-message').should('not.exist');
    cy.get('div[id$="-error"]').should('not.exist');
  });

  it('7.1. Rejeita nome de usuário com pelo menos 3 caracteres especiais diferentes (erro visível)', () => {
    const id = Date.now();
    cy.get('#user_login').type(`@#$tyg${id}`.slice(0, 10));
    cy.get('#user_email').type(`thyago${id}@gmail.com`);
    cy.get('#user_pass').type('12345678');
    cy.get('#user_confirm_password').type('12345678');
    cy.get('button[type="submit"]').click();
    cy.contains('Please enter a valid username.', { timeout: 5000 }).should('be.visible');
  });

  it('8. Botão "Enviar" está sempre habilitado mesmo com campos inválidos', () => {
    cy.get('button[type="submit"]').should('be.enabled').click();
    cy.get('#user_email-error', { timeout: 5000 })
      .should('contain.text', 'This field is required.');
  });

});
