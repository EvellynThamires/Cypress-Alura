Cypress.Commands.add('login', (name, password) => {
    cy.get('input[formcontrolname="userName"]').type(name);
    cy.get('input[formcontrolname="password"]').type(password, { log: false });
    cy.get('button[type="submit"]').click();
})