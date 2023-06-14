describe("Actividad complementaria 3", () =>{
	// instalar la dependencia cypress-xpath
  // remplazar todos los selectores 'cssSelectors' por expresiones xpath
  // recorda usar el metodo cy.xpath y agregar la dependencia en el archivo e2e.
    it('Actividad complementaria 3', () =>{
        cy.visit('');
        cy.xpath('/html/body/div[1]/div/div/div/form/p/span').dblclick()
        cy.xpath('//input[@name="user"]').type(`pushingit`);
        cy.xpath("//input[contains(@name,'pass')]").type('123456!');
        cy.xpath("//button[text()='Log in']").click()
        cy.xpath("//a[contains(text(),'Do Li')]").click()
        cy.xpath("//button[starts-with(@id,'sen')]").type("tarea 1")
        cy.xpath("//form//descendant::button[@id='sendTask']").click()
        cy.xpath('//button[text()="Delete"]//preceding-sibling::p').click()
    });
});


//Si queres practicar mas podes rehacer el desafio 1 cambiando todos los selectores que usaste por expresiones xpath!!!!

//https://drive.google.com/drive/u/1/folders/1HLb8ZVjPq207-iu3HGo9ugy4c3qOgB0S