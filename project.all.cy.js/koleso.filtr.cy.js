
describe('template spec', () => {
  
  it('passes', () => {
    cy.viewport(1440, 900)
 
   

   

//Фильтр
cy.visit('url') 
cy.intercept(
  {
    method: 'POST', // Route all GET requests
    url: '/local/api/mainFilter/*', // that have a URL that matches '/users/*'
  },
).as('getFilter')

//field-check-list__item

cy.get('.calculator-body__cell--group > :nth-child(1)  .field-select__btn').click()
cy.get('.calculator-body__cell--group > :nth-child(1)  .field-check-list > :nth-child(1)' ).click()
cy.get('.calculator-body__cell--group > :nth-child(2)  .field-select__btn').click()
//cy.get('.calculator-body__cell--group > :nth-child(2)  .field-check-list > :nth-child(1)' ).click()
//cy.get('.calculator-body__cell--group > :nth-child(3)  .field-select__btn').click()
//cy.get('.calculator-body__cell--group > :nth-child(3)  .field-check-list > :nth-child(1)' ).click()
 // and assign an alias
 
cy.wait('@getFilter')
cy.get('.calculator-body__cell--action > .btn').click()

//cy.get('.calculator-body__cell--action > .btn', { timeout: 10000 })
// cy.get('.calculator-body > .calculator-body__cell.calculator-body__cell--group > :nth-child(1) .field-select__btn').click()
//cy.get('[class="field-check-list__item flc field--spreed"]').click()
//cy.get('.calculator-body__cell--action > .btn').click()


  })
})

