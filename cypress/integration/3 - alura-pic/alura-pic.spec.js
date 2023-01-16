describe('Login and register of users on alura pic', () => {
    
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('Verify validation messages', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');

        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('Verify message of an invalid email', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('evellyn');

        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('Verify message when the full name have a length less than two characters', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('e');
        cy.contains('button', 'Register').click();

        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('Verify message when username have a length less than two characters', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('e');
        cy.contains('button', 'Register').click();

        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('Verify message when username have a upper case character', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('E');
        cy.contains('button', 'Register').click();

        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('Verify message when password have a length less than eight characters', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();

        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })
})