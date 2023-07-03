//crea un fixture con las siguientes keys 
//username (el username debe ser inexistente)
//pasword (la password debe ser valida) //123456!
//mensajeError (el mensaje de error lo tienes que copiar de la pagina ) //Credentials were not found

//usa before para acceder al fixture y obtener los datos
//beforeEach para visitar la pagina y dirigirse al login

/// <reference types="cypress" />

describe('Actividad complementaria 4', () => {
    //inicializa el fixture
    let data;
    
    before('Acceso a datos', ()=> {
        cy.fixture('dataActComp4').then(datos => {
            data = datos;
        })
    })

    beforeEach('Visita de página y Login', ()=>{
        cy.visit('')
        cy.get("#registertoggle").dblclick();

    })

    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(data.datosLogueo.usuario);
        cy.get('#pass').type(data.datosLogueo.contraseña); //la contraseña debe ser valida por el sistema
        cy.get('#submitForm').click();
        cy.get('#messageError').should('have.text',data.errorMessage.message)
    });
});