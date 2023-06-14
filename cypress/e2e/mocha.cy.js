/// <reference types="cypress"/>

describe('Primera suite de pruebas', () => {
    const Tester ='Edgardo'
    it('Primer test con mocha', () => { 
        cy.log('Primer test con cypress by ' + Tester)
    })

    it('Segundo test con mocha', () => { 
        cy.log('Segundo test con cypress by ' + Tester)
    })
})

describe('Segunda suite de pruebas', () => {

    it.skip('Segundo test con mocha', () => { 
        cy.log('Segundo test con cypress by ' + Tester)
    })
})
