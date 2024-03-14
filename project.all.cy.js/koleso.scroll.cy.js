//Поиск и скролл

  describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://test:test@url');
      cy.viewport(1440, 900);
      // Скролл вниз
      cy.scrollTo(0, 1000)
  
      // Убедимся, что элемент слайдера существует на странице
      cy.get('.swiper-container .swiper-wrapper').should('exist').then($el => {
        // Проверим, что ширина элемента больше нуля, чтобы вызвать скролл
        const width = $el[0].scrollWidth;
        expect(width).to.be.greaterThan(0);
        
        // Выполняем скролл элемента слайдера вправо
        cy.scrollTo('right', { container: $el[0] });
        
        // Добавляем более длительное ожидание для дождаться окончания скролла
        cy.wait(5000); // Увеличьте время ожидания при необходимости
        
        // Проверяем, что элемент слайдера был фактически прокручен вправо
        cy.get('.swiper-container .swiper-wrapper').then($newEl => {
          const scrollLeft = $newEl[0].scrollLeft;
          expect(scrollLeft).to.be.greaterThan(0);
        });
      });
    });
  });

