//importar la pagina todoListPage
import { ToDoListPage } from "../support/pages/toDoListPage";
//importar la pagina loginPage
import { LoginPage } from "../support/pages/loginPage";

describe('Actividad complementaria 6', () => { 
    //generar una instancia de la clase todoListPage
    const toDoListPage = new ToDoListPage();
    //generar una instancia de la clase loginPage
    const loginPage = new LoginPage();

         beforeEach("Actividad complementaria 5", () => {
            cy.visit('');
            cy.get("#registertoggle").dblclick();
            loginPage.escribirUsuario('pushingit');// utilizar la clase loginPage para ingresar el usuario
            loginPage.escribirContraseña('123456!');// utilizar la clase loginPage para ingresar  la contraseña
            loginPage.clickLoginBtn();// utilizar la clase loginPage hacer click en 'Log in'
            cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
            cy.get('#todolistlink',{timeout: 30000}).click();
        });
          it("deberia verificar que los botones existen", () =>{
            toDoListPage.returnAllBtn().should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            toDoListPage.returnCompletedBtn().should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            toDoListPage.returnActiveBtn().should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            toDoListPage.returnRemoveAllBtn().should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
        });
     });