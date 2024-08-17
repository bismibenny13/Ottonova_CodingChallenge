describe('PokeAPI Backend Test', () => {
    it('should check the response status and content of the endpoint', () => {
      cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu').then((response) => {
        
        // Assert that the response status is 200
        expect(response.status).to.eq(200);
  
        // Assert that the response body includes "moves" and "abilities" properties
        //Testing
        expect(response.body).to.have.property('moves');
        expect(response.body).to.have.property('abilities');

        expect(response.body.name).to.eq('pikachu');
  
      });
    });
  });
  