//todos los selectores deben ser modificados y utilizar una expresion diferente ya sea con
//css selector o con un metodo de cypress

/// <reference types="cypress" />
describe("Actividad complementaria 2", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementaria 2', () =>{
        cy.visit('');
        cy.get('#user').type(`pushingit${numero}`); 
        cy.get('[name$="ser"]').clear()
        cy.get('input#user').type(`pushingit${numero}`);
        cy.get('input.password').type('123456!');
        cy.get("input[class = 'chakra-radio__input']").check({force:true})
        cy.get('select#day').select('20')
        cy.get('select#month').select('September')
        cy.get('select#year').select(10)
        cy.get('button#submitForm').click()
        cy.wait(5000)
    });
});