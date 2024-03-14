
describe('template spec', () => {
  
  it('passes', () => {
     
    cy.visit('url')
    cy.viewport(1440, 900)

   //Корзина
   // алгоритм добавления товара из десктопной версии
   cy.get(':nth-child(1) > .main-nav__link > .main-nav__link-main').click()
   cy.get('.product-grid__grid > :nth-child(1)').click()
   cy.get('.card-interface__actions-cell > .v-basket-action > .basket-action__widget > :nth-child(1) > .basket-action__btn--left').click()
   cy.get('.quick-view__actions > :nth-child(2) > .btn').click()

    // переходим вкорзину, заполняем данные для заказа
  
    cy.get(':nth-child(1) > .form__group-body > .form__fields > :nth-child(2) .field-text__field-input').type('Иван')
    cy.get(':nth-child(1) > .form__group-body > .form__fields > :nth-child(3) .field-text__field-input').type('+375335555555')
    cy.get(':nth-child(3) > .form__group-body > .form__fields > :nth-child(1) .field-text__field-input').type('Пушкина')
    cy.get(':nth-child(3) > .form__group-body > .form__fields > :nth-child(2) .field-text__field-input').type('10')
    cy.get(':nth-child(3) > .form__group-body > .form__fields > :nth-child(3) .field-text__field-input').type('50')
    cy.get('.basket-total__action > .btn').click()
   

  })
})

