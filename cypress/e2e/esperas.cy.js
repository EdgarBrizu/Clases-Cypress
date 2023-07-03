/// <reference types="cypress" />

describe('Fixtures', () => {
    let data;

    before('Before', () => {
        cy.fixture('data').then(datos => {
            data = datos;
        });
    });

    beforeEach('Before Each', () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(data.datosLogin.usuario);
        cy.get('#pass').type(data.datosLogin.contraseña);
        cy.get('#submitForm').click();
        cy.contains('Waits').click();
    });

    it('Esperas con wait', () => {
        cy.get('[id="wait"]').dblclick();
        cy.wait(20000);
        cy.get('[id="message"]').should('exist');
    });

    it('Esperas con timeout', () => {
        cy.get('[id="wait"]').dblclick();
        cy.get('[id="message"]', {timeout: 30000}).should('have.text', 'You are a man of patience and have waited fifteen seconds')
    });

    it('Esperas con un spinner de carga segundo mensaje', () => {
        cy.get('[id="wait"]').dblclick();
        cy.WaitForSpinnerNotToExist();
        cy.get('[id="message"]').should('have.text', 'You are a man of patience and have waited fifteen seconds')
    });

    it('Esperas con un spinner de carga primer mensaje', () => {
        cy.get('[id="wait"]').dblclick();
        cy.WaitForSpinnerNotToExist();
        cy.get('[id="message"]').should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
    });
});