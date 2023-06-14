describe('Actividad complementaria 7', () => { 
    
    beforeEach("Actividad complementaria 7", () => {
       cy.visit('');
       cy.get("#registertoggle").dblclick()
       cy.get('#user').type('pushingit')
       cy.get('#pass').type('123456!')
       cy.get('#submitForm').click()
       //cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist')
       cy.contains('To Do List').click()
       cy.get("[name$='sk']").type("Tarea 1"); // "sk" de Task
        cy.get("button#sendTask").click();
        cy.get("[name$='sk']").type("Tarea 2");
        cy.get("button#sendTask").click();
        cy.get("[name$='sk']").type("Tarea 3");
        cy.get("button#sendTask").click();
   })
    it("Deberia sacar una foto completa", () =>{
        cy.screenshot('foto a pantalla completa');
       //agregar 3 tareas y sacar una foto a la pantalla completa
   })
 
    it("Deberia sacar una foto a las tres tareas", () =>{
    cy.contains('Tarea 1').screenshot('foto a to do list button');
    cy.contains('Tarea 2').screenshot('foto a to do list button');
    cy.contains('Tarea 3').screenshot('foto a to do list button');
       //agregar 3 tareas y sacar una foto a las tareas (las 3 tareas en la misma foto - cuadro celeste)
   })
})

// Instalar git
// Inicializa un repositorio en github desde visual studio code
// Subi el repositorio completo. Recorda usar .gitignore para ignorar la carpeta node modules
// recorda usar los comandos git add (o usa visual studio code para elegir los archivos) // git commit -m "mensaje" // git push origin {nombre de tu branch}
// SI es la primera vez que usas git te va a pedir que pongas las credenciales y autorices github en el navegador

