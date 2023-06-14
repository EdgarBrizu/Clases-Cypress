/// <reference types="cypress" />
describe("Actividad complementaria", () =>{
    const numero = Math.floor(Math.random() * 1000)

    it('Actividad complementeria 1 - Registro', () =>{
        cy.visit('https://pushing-front.vercel.app/')
        //crear un test que permita registrarse en la pagina!
        cy.get('#user').type('EdgardBrizu')
        cy.get('#pass').type("123456!")
        cy.get('#day').select('20')
        cy.get('#month').select('March')
        cy.get('#year').select('1991')
        cy.get('[value="Male"]').check({force: true})
        cy.get('#submitForm').click()
        //Recorda usar npx cypress open para abrir la interfaz de usuario
        //Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female //Other
    });

    it('Actividad complementaria 1 - logueo', () =>{
        cy.visit('https://pushing-front.vercel.app/')
        cy.get('#registertoggle').dblclick()
        cy.get('#user').type('pushingit')
        cy.get('#pass').type("123456!")
        cy.get('#submitForm').click()
    })
});
