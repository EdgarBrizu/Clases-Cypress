export class ToDoListPage {
    constructor() {
        this.allBtn = '#all';
        this.completedBtn = '#completed';
        this.activeBtn = '#active';
        this.removeAllBtn = '#removeAll';
        this.tareaInput = '#task';
        this.sendtaskBtn = '#sendTask';
    };

    returnAllBtn(){
        return cy.get(this.allBtn);
    };
    returnCompletedBtn(){
        return cy.get(this.completedBtn);
    };
    returnActiveBtn(){
        return cy.get(this.activeBtn);
    };
    returnRemoveAllBtn(){
        return cy.get(this.removeAllBtn);
    };
    escribirTarea(tarea) {
        cy.get(this.tareaInput).type(tarea);
    };

    clickSendButton() {
        cy.get(this.sendtaskBtn).click();
    };

    completarTarea(tarea) {
        cy.contains(tarea).click();
    };

    devolverTarea(tarea){
        return cy.contains(tarea)
    };
    
};