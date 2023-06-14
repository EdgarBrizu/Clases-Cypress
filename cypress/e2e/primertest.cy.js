/// <reference types="cypress"  />

describe('Primer test con cypress', () => {

    const numeroRandom = Math.floor(Math.random() * 1000)

    it('Deberia registrarse satisfactoriamente en la app', () => {
        cy.log(numeroRandom)
        cy.log(`${numeroRandom}`)
        cy.visit('')// o cy.visit('/') o cy.visit('/home')
        cy.get('#user').type(`Pushingit${numeroRandom}`)
        cy.get('#pass').type("123456!")
        cy.get('#day').select('5')
        cy.get('#month').select('March')
        cy.get('#year').select('1921')
        cy.get('[value="Male"]').check({force: true})
        cy.get('#submitForm').click()
    })
})

 