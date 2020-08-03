describe('My First Test', () => {
  it('Does not do much', () => {
    expect(true).to.equal(true);
  });
  it.skip('Fails', () => {
    expect(false).to.equal(false);
    expect(true).to.equal(false);
    expect(false).to.equal(false);
  });
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions');

    // Get an input with a css selector, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');

    expect(false).to.equal(false);
  });
});
