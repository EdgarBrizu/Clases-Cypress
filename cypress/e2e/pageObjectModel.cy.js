import { LoginPage } from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { ToDoListPage } from "../support/pages/toDoListPage";

describe('Page object model', () => {
    let data;
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const toDoListPage = new ToDoListPage();

    before('Before', () => {
        cy.fixture('data').then(datos => {
            data = datos;
        })
    });

    beforeEach('Before Each', () => {
        cy.visit('')
        cy.get('#registertoggle').dblclick();
        loginPage.escribirUsuario(data.datosLogin.usuario);
        loginPage.escribirContraseña(data.datosLogin.contraseña);
        loginPage.clickLoginBtn();
        homePage.clickToDoListButton();
    })

    it('Ingresar 2 tareas', () => {
        toDoListPage.escribirTarea("tarea 1");
        toDoListPage.clickSendButton();
        toDoListPage.escribirTarea("tarea 2");
        toDoListPage.clickSendButton();
        toDoListPage.devolverTarea('tarea 1').should('have.attr', 'style', 'text-decoration: none;');
        toDoListPage.completarTarea('tarea 1');
        toDoListPage.devolverTarea('tarea 1').should('have.attr', 'style', 'text-decoration: line-through;');
    });
});