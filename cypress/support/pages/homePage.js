export class HomePage {
    constructor() {
        this.toDoListBtn = 'To Do List'
    }

    clickToDoListButton() {
        cy.contains(this.toDoListBtn, { timeout: 30000 }).click();
    };
};