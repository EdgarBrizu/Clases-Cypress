/// <reference types="cypress" />

describe("Suite de pruebas para el módulo - To Do List", () => {
    let info;

    before('Aceso a datos', () =>{
        cy.fixture('datosDesafio2').then(datos => {
            info=datos;
        })
    })

    beforeEach('Login', ()=>{
        cy.visit('')
        cy.get("#registertoggle").dblclick();
        cy.get('#user').type(info.datosLogueo.usuario);
        cy.get('#pass').type(info.datosLogueo.contraseña);
        cy.get('#submitForm').click();
    })
    it('Ingreso de 5 Tareas', () => {
        cy.get("a[id='todolistlink']").click()
        cy.get("[name$='sk']").type(`${info.tareas.tarea1}`)// 
        cy.get('#sendTask').click()
        cy.get("[name^='ta']").type(`${info.tareas.tarea2}`)
        cy.get('#sendTask').click()
        cy.get("[name*='as']").type(`${info.tareas.tarea3}`)
        cy.get('#sendTask').click()
        cy.get('input#task').type(`${info.tareas.tarea4}`)
        cy.get('#sendTask').click()
        cy.get("#task").type(`${info.tareas.tarea5}`)
        cy.get('#sendTask').click()

    });

    it('Verificar existencia boton: All, Completed, Active y Remove all', () => {
        cy.get("a[id='todolistlink']").click()
        cy.get('button#all').should('exist')
        cy.get('[class="css-1if13rj"]').find('button[id="completed"]').should('exist')
        cy.get("#all").siblings('#active').should('exist')
        cy.contains('button','Remove').should('exist')

    });

    it('Agrega dos tareas, las completa y elimina la segunda tarea completada', () => {
        cy.xpath('/html/body/div[1]/div/div[2]/div[1]/p/a').click()
        cy.xpath('//input[@name="task"]').type(`${info.tareas.tarea1}{enter}`)
        cy.xpath('//input[@name="task"]').type(`${info.tareas.tarea2}{enter}`)
        cy.xpath('//p[text()="Primer Tarea"]').click()
        cy.xpath('//p[contains(text(),"Segunda")]').click()
        cy.xpath('//p[contains(text(),"Segunda")]//following-sibling::button').click();
 

    });

    it('Agrega dos tareas y elimina la priemra tarea', () => {
        cy.xpath("//a[contains(text(),'Do Li')]").click()
        cy.xpath('//input[@type="text"]').type(`${info.tareas.tarea1}{enter}`)
        cy.xpath('//button[@id="sendTask"]//preceding-sibling::input').type(`${info.tareas.tarea2}{enter}`);
        cy.xpath('//p[text()="Primer Tarea"]//following-sibling::button').click();
    });

});