export class ToDoListPage {
    constructor() {
        this.allBtn = '#all';
        this.completedBtn = '#completed';
        this.activeBtn = '#active';
        this.removeAllBtn = '#removeAll';
    };

    returnAllBtn(){
        return cy.get(this.allBtn);
    }
    returnCompletedBtn(){
        return cy.get(this.completedBtn);
    }
    returnActiveBtn(){
        return cy.get(this.activeBtn);
    }
    returnRemoveAllBtn(){
        return cy.get(this.removeAllBtn);
    }
    
};