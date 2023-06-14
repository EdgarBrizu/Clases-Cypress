/// <reference types="cypress" />

describe('Fixtures', () => {
    let data;

    before('Before', () => {
        cy.fixture('data').then(datos => {
            data = datos;
        })
    });

    beforeEach('Before Each', () => {
        cy.visit('')
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(data.datosLogin.usuario);
        cy.get('#pass').type(data.datosLogin.contraseña);
        cy.get('#submitForm').click();
        cy.contains('Waits').click()
    })

    it('Realizar una asercion utilizando should', () => {
        cy.get('#title').should('have.text', 'Waits').and('have.length', 1)
        cy.get('button').should('have.length', 2)
        cy.get('#title').invoke('text').should('be.equal', 'Waits').and('be.a', 'string').and('have.length', 5)
    })

    it('Realizar una asercion utilizando expect', () => {
        cy.get('#title').invoke('text').then(texto => {
            expect(texto).is.equal('Waits')
            expect(texto).have.length(5)
        })
        cy.get('#title').then(element => {
            expect(element).have.length(1)
        })
        cy.get('button').then(element => {
            expect(element).have.length(2)
        })
    })

    it('Realizar una asercion utilizando assert', () => {
        cy.get('#title').invoke('text').then(texto => {
            assert.equal(texto, 'Waits')
            assert.lengthOf(texto, 5)

        })
        cy.get('#title').then(element => {
            expect(element).have.length(1)
            assert.lengthOf(element, 1)
        })
        cy.get('button').then(element => {
            assert.lengthOf(element, 2)
        })
    })

    it('Realizar una asercion sobre el css (color)', () => {
        cy.get('#title').should('have.css', 'color', 'rgb(51, 255, 255)')
        cy.get('#title').invoke('css', 'color').then(color =>{
            expect(color).is.equal('rgb(51, 255, 255)')
        })
    })
});