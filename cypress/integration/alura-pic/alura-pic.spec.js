describe('Main screen functionalities', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })

    it('Verify main screen messages', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
    })

    it('Verify enabled button on main screen', () => {
        cy.get('input[formcontrolname="userName"]').type('Evellyn');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').should('be.enabled');
    })

    it('Verify application name on main screen', () => {
        cy.contains('a', 'ALURAPIC').should('be.visible');
    })

    it('Verify clickable menu on main screen', () => {
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    })
})