/// <reference types="cypress" />
describe('Api testing', () => {

    it('Primer test con api testing', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/posts'
        }).then(respuesta => {
            expect(respuesta.status).is.equal(200);
        });
    });

    it('Primer test con api testing con query', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/posts',
            qs: {
                id: 6
            }
        }).then(respuesta => {
            expect(respuesta.status).is.equal(200);
            cy.log(respuesta.body);
            expect(respuesta.body[0].title).is.equal('titulo 6');
            expect(respuesta.body[0].id).is.equal(6);
            expect(respuesta.body).has.length(1);
        });
    });

    it('Primer test con api testing con query', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/posts',
            qs: {
                _sort: 'id',
                _order: 'desc'
            }
        }).then(respuesta => {
            expect(respuesta.status).is.equal(200);
            cy.log(respuesta.body)
        });
    });


    it("peticion post", () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: {
                id: 100,
                author: "Pushing IT",
                title: "Comision 8"
            },
        }).then(respuesta => {
            cy.log(respuesta);
        });
    });

    it("peticion post con la indicacion de nico", () => {
        let idPost;
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/posts',
            qs: {
                _sort: 'id',
                _order: "desc"
            }
        }).then(respuesta => {
            idPost = respuesta.body[0].id
        })

        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: {
                id: idPost + 1,
                author: "Pushing IT",
                title: "Comision 8"
            }
        }).then(respuesta => {
            cy.log(respuesta)
        });
    });

    it('Segunda solucion al problema duplicate id', () => {
        const id = Math.floor(Math.random() * 10000)
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: {
                id: id,
                author: "Pushing IT",
                title: "Comision 8"
            }
        }).then(respuesta => {
            cy.log(respuesta)
        });
    });


    it("peticion post eliminando dsp de crear", () => {
        const id = 200
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: {
                id: id,
                author: "Pushing IT",
                title: "Comision 8"
            },
        }).then(respuesta => {
            cy.log(respuesta);
        });

        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/posts/' + id,
        }).then(respuesta => {
            cy.log(respuesta);
        });


        it("peticion post eliminando antes  de crear", () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/posts',
                qs: {
                    id: 200
                }
            }).its('body').each(body => {
                cy.request({
                    method: 'DELETE',
                    url: 'http://localhost:3000/posts/' + body.id,
                }).then(respuesta => {
                    cy.log(respuesta);
                });
            })

            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/posts',
                body: {
                    id: 200,
                    author: "Pushing IT",
                    title: "Comision 8"
                },
            }).then(respuesta => {
                cy.log(respuesta);
            });

        });
    });

    it('Editar un documento con metodo PUT', () => {
        cy.request({
            url: 'http://localhost:3000/posts/1',
            method: "PUT",
            body: {
                title: "Titulo editado 10",
            },
        }).then(respuesta => {
            cy.log(respuesta);
        });
        cy.request('http://localhost:3000/posts/1').then(respuesta => {
            cy.log(respuesta.body)
        })
    });
});

describe.only('APi testing en puhsingIT', () => {
    it("Deberia ingresar al sistema de PushingiT", () => {
        cy.request({
            url: 'https://pushing-it.onrender.com/api/login',
            method: "POST",
            body: {
                username: "pushingIt",
                password: "123456!"
            },
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(200)
            window.localStorage.setItem('token', respuesta.body.token)
            window.localStorage.setItem('user', respuesta.body.user.username)
        });
        cy.visit('');
    })
})