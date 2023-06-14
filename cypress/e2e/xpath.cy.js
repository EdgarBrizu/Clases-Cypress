/// <reference types="cypress" />

describe('xpath', () => {

    it('Encontrar elemetnos utilizando xpath absolutos', () => {
        cy.visit('');
        cy.xpath('/html/body/div[1]/div/div/div/form/div[1]/input');
    })

    it('Encontrar elemetnos utilizando xpath relativo', () => {
        cy.visit('');
        cy.xpath("//input[@name='user']");
    })

    it('Encontrar elemetnos utilizando metodo contains', () => {
        cy.visit('');
        cy.xpath("//input[contains(@name,'use')]");
    })

    it('Encontrar elemetnos utilizando metodo starts-with', () => {
        cy.visit('');
        cy.xpath("//input[starts-with(@name,'us')]");
    })

    it('Encontrar elemetnos utilizando metodo text', () => {
        cy.visit('');
        cy.xpath("//button[text()='Register']");
    })

    it('Encontrar elemetnos utilizando metodo text y contains', () => {
        cy.visit('');
        cy.xpath("//button[contains(text(),'Registe')]");
    })

    it('Encontrar elemetnos utilizando metodo text y starts-with', () => {
        cy.visit('');
        cy.xpath("//button[starts-with(text(),'Registe')]");
    })

    it('Encontrar elemetnos utilizando operador logico and', () => {
        cy.visit('');
        cy.xpath("//input[@name='user' and @id='user']");
    })

    it('Encontrar elemetnos utilizando operador logico or', () => {
        cy.visit('');
        cy.xpath("//input[@name='user' or @id='us']");
    });

    it('Encontrar elemetnos utilizando operador logico not', () => {
        cy.visit('');
        cy.xpath("//input[@name='user' and not(@id='pass')]");
    });

    it('Encontrar elemetnos utilizando metodo descendant', () => {
        cy.visit('');
        cy.xpath("//fieldset//descendant::input[@value='Male']");
    })

    it('Encontrar elemetnos utilizando metodo ancestor', () => {
        cy.visit('');
        cy.xpath("//input[@value='Male']//ancestor::fieldset");
    })

    it('Encontrar elemetnos utilizando metodo child', () => {
        cy.visit('');
        cy.xpath('//div[@role="group"][1]//child::input');
    })

    it('Encontrar elemetnos utilizando metodo parent', () => {
        cy.visit('');
        cy.xpath('//input[@id="user"]//parent::div');
    })

    it('Encontrar elemetnos utilizando metodo preceding-sibling', () => {
        cy.visit('');
        cy.xpath('//input[@id="user"]//preceding-sibling::label');
    })

    it('Encontrar elemetnos utilizando metodo following-sibling', () => {
        cy.visit('');
        cy.xpath('//label[@for="user"]//following-sibling::input');
    })
});