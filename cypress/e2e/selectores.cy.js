describe('Selectores', () => {

    it("encontrar elementos web con cssSelector", () => {
        cy.visit('');
        cy.get('button').should('exist');
        cy.get('[name="pass"]').should('exist');
        cy.get('#pass').should('exist');
        cy.get('input#user').should('exist');
        cy.get("input[id='user']").should('exist');
        cy.get('.password').should('exist');
        cy.get('input.password').should('exist');
        cy.get("input[class='chakra-input password css-1ekf6i8']").should('exist');
        cy.get('[name^="pass"]').should('exist') //el valor deberia de comenzar con cierto valor
        cy.get('[name$="ame"]').should('exist') //el valor deberia de finalizar con cierto valor
        cy.get('[name*="ss na"]').should('exist') //debe contener cierto valor
        cy.get('[class*="password"]').should('exist')
    });
    
    it('Metodo first y find', () =>{
        cy.visit('')
        cy.get('[class="chakra-form-control css-c1qqtu"]').first().find('input[id="user"]')
    })

    it('Metodo contains', () =>{
        cy.visit('');
        cy.contains('button','Register');
    });

    it('Metodo sibbling', () =>{
        cy.visit('');
        cy.get('[for="user"]').siblings('input')
    });    

    it('Metodo children and eq', () =>{
        cy.visit('');
        cy.get('[role="group"]').eq(1).children('#pass')
    });    

    it('Metodo parent ', () =>{
        cy.visit('');
        cy.get('#pass').parent('')
    });   
});