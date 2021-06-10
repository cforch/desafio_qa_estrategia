describe('API Regres Testing', () => {
    Cypress.config('baseUrl', 'https://reqres.in/api')

    it('POST - register user', () => {
        const body = {"email":"eve.holt@reqres.in", "password": "pistol"}
        cy.request('POST', "/register", body).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
            expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4');
            expect(response.body.id).to.eq(4)
        })
    })

    it('POST - register user without password ', () => {
        const body = {"email":"eve.holt@reqres.in"}
        cy.request({method:'POST',url: "/register", body: body, failOnStatusCode: false}).should((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.error).to.eq("Missing password");
        })
    })

    it('POST - login user', () => {
        const body = {"email":"eve.holt@reqres.in", "password": "pistol"}
        cy.request('POST', "/login", body).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
            expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4');
        })

    })

    it('POST - login user without password', () => {
        const body = {"email":"eve.holt@reqres.in"}
        cy.request({method:'POST', url:"/login", body:body, failOnStatusCode: false}).should((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.error).to.eq("Missing password");
        })

    })
    it('POST - create user morpheus', () => {
        const body = {"name": "morpheus", "job": "leader"}
        cy.request({method:'PUT', url:'/users/2', body:body}).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq('morpheus');
            expect(response.body.job).to.eq('leader');
        })
    })

    it('PUT - update user morpheus', () => {
            const body = {"name": "morpheus", "job": "zion resident"}
            cy.request({method:'PUT', url:'/users/2', body:body}).should((response) =>{
                expect(response.status).to.eq(200);
                expect(response.body.name).to.eq('morpheus');
                expect(response.body.job).to.eq('zion resident');
            })
        })

    it('DELETE  delete user morpheus', () => {
        cy.request({method: 'DELETE', url: '/users/2'}).should((response) => {
            expect(response.status).to.eq(204);
        })
    })


})