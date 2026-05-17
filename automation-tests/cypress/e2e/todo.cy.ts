describe('Testando o fluxo do App React', () => {
  it('Deve carregar a página e adicionar um novo item com sucesso', () => {
    cy.visit('http://localhost:5173');
    
    cy.get('[data-cy="todo-list"]').should('contain', 'Estudar Cypress');
    
    cy.get('[data-cy="todo-input"]').type('Criar Pipeline CI/CD');
    cy.get('[data-cy="todo-submit"]').click();
    
    cy.get('[data-cy="todo-list"]').should('contain', 'Criar Pipeline CI/CD');
  });
});