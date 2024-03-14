
describe('template spec', () => {
  let width = 1440;
  let height = 900;
  it('passes', () => {
     
    cy.visit('https://test:test@url')
    cy.viewport(width, height)

    
    // Форма
  
    cy.get(':nth-child(3) > .main-nav__link > .main-nav__link-main').click()
    cy.get(':nth-child(1) > .v-product > .product-t-grid > .product-t-grid__card > .product-t-grid__bottom > .product-t-grid__visual > .product-t-grid__view > .quick-btn').click()
    cy.get('.card-interface__actions-cell > .v-basket-action > .basket-action__widget > .basket-action__cell-main > .basket-action__btn').click()
    cy.get('[class="v-field-text field-text field-text--placeholder-state"]').type('Иван')
    cy.get('[inputmode="tel"]').type('+375255555555')
    cy.get('.form__action > .btn').click()


  })
})

