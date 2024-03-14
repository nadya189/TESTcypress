describe('Test API GET', () => {
    it('GET TEST', () => {
      
      cy.request('https://swapi.dev/api/people/1/').then((response) =>{
        expect(response).to.have.property('status', 200)
        expect(response.body).to.not.be.null
      })
     
    });
  });