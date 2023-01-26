describe('User login on Alura pic', () => {
    beforeEach(() => {
        cy.visit('/')

        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400
        }).as('stubPost')
    })

    it.only('Login with a valid user', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))

        cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('Login with an invalid user', () => {
        cy.login('evellyn', '1234')

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })
});