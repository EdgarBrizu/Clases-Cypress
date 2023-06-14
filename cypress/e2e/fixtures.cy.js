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
        cy.contains('To Do List').click()
    })
    it.only('Deberia permitir al usuario ingresar una tarea', () => {
        cy.log(data);
        const testGroupValue = '100';
        data.tareas.tarea1 = `${data.tareas.tarea1}-${testGroupValue}`;
        cy.get('#task').type(`${data.tareas.tarea1} {enter}`);
    });

    it.only('Deberia permitir al usuario ingresar dos tarea', () => {
        const testGroupValue = '101'
        data.tareas.tarea1 = `${data.tareas.tarea1}-${testGroupValue}`;
        data.tareas.tarea2 = `${data.tareas.tarea2}-${testGroupValue}`;
        cy.get('#task').type(`${data.tareas.tarea1} {enter}`);
        cy.get('#task').type(`${data.tareas.tarea2} {enter}`);
    });


    after('After', () => {
        cy.log('Subiendo el reporte en slack');
    })
});

import { LOGIN_DATA } from "../support/constantes";

describe('Fixtures en el test', () => {

    beforeEach('Before Each', () => {
        cy.visit('')
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(LOGIN_DATA.usuario);
        cy.get('#pass').type(LOGIN_DATA.contraseña);
        cy.get('#submitForm').click();
        cy.contains('To Do List').click()

    })
    it('Deberia permitir al usuario ingresar una tarea', () => {
        cy.fixture('data').then(datos => {
            cy.get('#task').type(`${datos.tareas.tarea1} {enter}`)
        })
    });

    it('Deberia permitir al usuario ingresar dos tarea', () => {
        cy.fixture('data').then(datos => {
            cy.get('#task').type(`${datos.tareas.tarea1} {enter}`)
            cy.get('#task').type(`${datos.tareas.tarea2} {enter}`)
        });
    });
});

import datos from "../fixtures/data.json";

describe('Obteniendo la informacion de un import', () => {
    beforeEach('Before Each', () => {
        cy.visit('')
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(LOGIN_DATA.usuario);
        cy.get('#pass').type(LOGIN_DATA.contraseña);
        cy.get('#submitForm').click();
        cy.contains('To Do List').click()

    })

    it('Deberia permitir al usuario ingresar una tarea', () => {
        cy.get('#task').type(`${datos.tareas.tarea1} {enter}`)

    });

    it('Deberia permitir al usuario ingresar dos tarea', () => {
        cy.get('#task').type(`${datos.tareas.tarea1} {enter}`)
        cy.get('#task').type(`${datos.tareas.tarea2} {enter}`)
    });
});