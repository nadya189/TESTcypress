// Working with cookies:
describe('template spec', () => {

    it('passes', () => {
       
      cy.visit('url')
      cy.viewport(1440, 900)
  //Выбор геолокации
      cy.get('#comp_f218856a64b1cace8f71f0abed62825f > .top-nav__cell > .top-nav-link > .top-nav-link__main').click()   
      cy.get('.field-select__btn-text').click() 
      cy.get('[data-index="1"]').click() 
      cy.get('.modal__geo-action > .btn').click() 
      
// Проверка куки с данной геолокацией
//cy.getCookie('cookieName').should('have.property', 'value', 'expectedValue');
cy.setCookie('BITRIX_SM_CITY_REQUEST', '1')
cy.setCookie('GEOIP_CITY_ID', '124')
cy.clearCookie('PHPSESSID');
  
//Закрыть всплывающее окно с куками
cy.get('.cookies-content__action > .btn').click()
    })
  })