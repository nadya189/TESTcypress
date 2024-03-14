
 describe('Drag and Drop Test', () => {
  it('should drag and drop elements successfully', () => {
    // Посетите страницу, где будет происходить перетаскивание
    cy.visit('https://jira.by/');
   cy.viewport(1440, 900)
      
    
  //autorization
  cy.get('#login-form-username').type('login')
  cy.get('#login-form-password').type('password')
  cy.get('#login-form-submit').click()
    // Найти и выбрать элементы, которые нужно перетащить и куда их нужно перетащить
    cy.get('#ANORKS-283').trigger('mousedown', { which: 1 });
    cy.get('#ghx-pool > [swimlane-id="8"] > .ghx-columns > [data-column-id="2361"]').trigger('mousemove').trigger('mouseup', { force: true });

    // Проверить, что перетаскивание произошло успешно
    //cy.get('#ghx-pool > [swimlane-id="8"] > .ghx-columns > [data-column-id="2361"]').should('contain', 'Dropped!');
  });
});