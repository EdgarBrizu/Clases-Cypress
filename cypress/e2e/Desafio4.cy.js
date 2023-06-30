describe('Desafío 4',() =>{
    const numeroRandom = Math.floor(Math.random() * 1000);
    it('peticiones Desafío', () =>{
        cy.request({
            url:'https://pushing-it.onrender.com/api/register',
            method: 'POST',
            body:{
                username: `brizu${numeroRandom}`,
                password: '123456!',
                gender: 'male',
                day: '20',
                month: '11',
                year: '1991',
                }
        });
        cy.request({
            url:'https://pushing-it.onrender.com/api/login',
            method: 'POST',
            body:{
                username: `brizu${numeroRandom}`,
                password: '123456!',
                }
        }).then(respuesta => {
            window.localStorage.setItem('token', respuesta.body.token)
            window.localStorage.setItem('user', respuesta.body.user.username)
                }); 
        cy.request({
            url:`https://pushing-it.onrender.com/api/deleteuser/brizu${numeroRandom}`,
            method: 'DELETE',
        body:{
            username: `brizu${numeroRandom}`,
            password: '123456!',
            }
        });        
    });
});