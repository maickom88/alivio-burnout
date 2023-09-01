
describe('alivio-burnout', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('body');
  });
});
