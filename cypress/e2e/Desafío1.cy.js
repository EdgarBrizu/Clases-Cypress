/// <reference types="cypress" />
describe("Desafio número 1", () => {
  const randomNumber = Math.floor(Math.random() * 1000);

  it("Actividad Desafio 1", () => {
    cy.visit("");
    //registro en la pagina
    cy.get("#user").type(`EdgardoBrizuela${randomNumber}`);
    cy.get('[role="group"]').eq(1).children("#pass").type("123456!");
    cy.get("#day").select("20");
    cy.get("#month").select("March");
    cy.get("#year").select("1991");
    cy.get('[value="Male"]').check({ force: true });
    cy.get("#submitForm").click();
    //Ingreso al To Do List
    cy.get("a[id='todolistlink']").click();
    cy.get("[name$='sk']").type("Tarea"); // "sk" de Task
    cy.get("button#sendTask").click();
    cy.get("[name$='sk']").type("Tarea2");
    cy.get("button#sendTask").click();
    cy.get("[name$='sk']").type("Tarea3");
    cy.get("button#sendTask").click();
    cy.get('[class="css-vn850v"]').first().find("p").click();
    //cy.get("p[class='chakra-text css-8atqhb']").click() pero esto es encontrando la clase de forma manual
    cy.contains("p", "Tarea3").click();
    cy.contains("p", "Tarea3").click();
  });
});
