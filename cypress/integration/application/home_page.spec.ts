describe('The Home Page', () => {
  // SEEDING DATA
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec('npm run db:reset && npm run db:seed');

    // seed a post in the DB that we control from our tests
    cy.request('POST', '/test/seed/post', {
      title: 'First Post',
      authorId: 1,
      body: '...'
    });

    // seed a user in the DB that we can control from our tests
    cy.request('POST', '/test/seed/user', { name: 'Jane' })
      .its('body')
      .as('currentUser');
  });

  it('successfully loads', () => {
    // cy.visit('http://localhost:8080'); // change URL to match your dev URL
    cy.visit('/');
  });
});
