/// <reference types="cypress" />

describe('Hooks', () => {
    let usuario;
    let contraseña;
    let tarea1;
    let tarea2;

    before('Before', () => {
        usuario = 'pushingit';
        contraseña = '123456!';
        tarea1 = 'Tarea 1';
        tarea2 = 'Tarea 2'
    });

    beforeEach('Before Each', () => {
        cy.visit('')
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(usuario);
        cy.get('#pass').type(contraseña);
        cy.get('#submitForm').click();
        cy.contains('To Do List').click()
    })
    it('Deberia permitir al usuario ingresar una tarea', () => {
        cy.get('#task').type(`${tarea1} {enter}`)
    });

    it('Deberia permitir al usuario ingresar dos tarea', () => {
        cy.get('#task').type(`${tarea1} {enter}`)
        cy.get('#task').type(`${tarea2} {enter}`)
    });

    afterEach('After each', () => {
        cy.get('#logout').click()
    })

    after('After', () => {
        cy.log('Subiendo el reporte en slack');
    })
});