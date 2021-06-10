describe('API Parte 2 Testing', () => {
    Cypress.config('baseUrl', 'http://54.174.86.218/')

    it('Registrar novo usuario', () => {
        const body = {"name": "Caio Cardoso","email":"caioforch10@gmail.com", "password": "teste2021"}
        cy.request('POST', "/auth/register", body).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
            expect(response.body.user.name).to.eq("Caio Cardoso")
            expect(response.body.user.email).to.eq("caioforch10@gmail.com")
        })
    })

    it('Registrar usuario existente', () => {
        const body = {"name": "Caio Cardoso","email":"caioforch10@gmail.com", "password": "teste2021"}
        cy.request({method: 'POST', url: "/auth/register", body: body, failOnStatusCode: false}).should((response) => {
            expect(response.status).to.eq(409);
        })
    })

    it('Login usuario cadastrado', () => {
        const body = {"email":"caioforch10@gmail.com", "password": "teste2021"}
        cy.request('POST', "/auth/authenticate", body).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
            expect(response.body.user.name).to.eq("Caio Cardoso")
            expect(response.body.user.email).to.eq("caioforch10@gmail.com")
        })
    })

    
    it('Login Usuario inexistente', () => {
        const body = {"email":"a@a.com", "password": "teste2021"}
        cy.request({method: 'POST', url:"/auth/authenticate", body: body, failOnStatusCode: false}).should((response) => {
            expect(response.status).to.eq(401);
        })
    })

    it('Criar projeto', () => {
        const body = {"email":"caioforch10@gmail.com", "password": "teste2021"}
        cy.request('POST', "/auth/authenticate", body).then((response) => {
            Cypress.env('token', response.body.token);
            return response;
        })
        const body2 = {"title":"Projeto QA", "description":"Testando API", "tasks":[{"name":"Automation Task", "assignedTo":"5f11f41bcc6ba55cbb068143"}]}
        const token = Cypress.env('token');
        const authorization = 'bearer' + token;
        cy.request({method:'POST', url:" /projects", body:body2, headers: {authorization}}).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.project.title).to.eq("Projeto QA")
            expect(response.project.description).to.eq("Testando API")
        })
    })

    it('Verificar todos os projetos', () => {
        const body = {"email":"caioforch10@gmail.com", "password": "teste2021"}
        cy.request('POST', "/auth/authenticate", body).then((response) => {
            Cypress.env('token', response.body.token);
            return response;
        })
        const token = Cypress.env('token');
        const authorization = 'bearer' + token;
        cy.request({method:'GET', url:"/projects", headers: {authorization}}).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.project.title).to.eq("Projeto QA")
            expect(response.project.description).to.eq("Testando API")
        })
    })

    it('Verificar projeto especifico', () => {
        const body = {"email":"caioforch10@gmail.com", "password": "teste2021"}
        cy.request('POST', "/auth/authenticate", body).then((response) => {
            Cypress.env('token', response.body.token);
            return response;
        })
        const token = Cypress.env('token');
        const authorization = 'bearer' + token;
        const id = "5f1b30a7c0613220acc3ee4b"
        cy.request({method:'GET', url:"/projects/:" + id, headers: {authorization}}).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.project._id).to.eq("5f1b30a7c0613220acc3ee4b")
            expect(response.project.title).to.eq("Projeto QA")
            expect(response.project.description).to.eq("Testando API")
        })
    })

    it('Verificar projeto inexistente', () => {
        const body = {"email":"caioforch10@gmail.com", "password": "teste2021"}
        cy.request('POST', "/auth/authenticate", body).then((response) => {
            Cypress.env('token', response.body.token);
            return response;
        })
        const token = Cypress.env('token');
        const authorization = 'bearer' + token;
        const id = "9999999"
        cy.request({method:'GET', url:"/projects/:" + id, headers: {authorization}, failOnStatusCode: false}).should((response) => {
            expect(response.status).to.eq(404); 
        })
    })

    it('Verificar projeto especifico sem token', () => {
        const authorization = 'bearer' + token;
        const id = "5f1b30a7c0613220acc3ee4b"
        cy.request({method:'GET', url:"/projects/:" + id, failOnStatusCode: false}).should((response) => {
            expect(response.status).to.eq(401);
        })
    })

    it('Atualizar projeto especifico', () => {
        const body = {"email":"caioforch10@gmail.com", "password": "teste2021"}
        cy.request('POST', "/auth/authenticate", body).then((response) => {
            Cypress.env('token', response.body.token);
            return response;
        })
        const body2 = {"title":"Projeto QA", "description":"Testando API atualizado", "tasks":[{"name":"Automation Task", "assignedTo":"5f11f41bcc6ba55cbb068143"}]}
        const token = Cypress.env('token');
        const authorization = 'bearer' + token;
        const id = "5f1b30a7c0613220acc3ee4b"
        cy.request({method:'PUT', url:"/projects/:" + id, body:body2, headers: {authorization}}).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.project.description).to.eq("Testando API atualizado")
        })
    })

    it('Deletar projeto especifico', () => {
        const id = "5f1b30a7c0613220acc3ee4b"
        cy.request({method:'DELETE', url:"/projects/:" + id}).should((response) => {
            expect(response.status).to.eq(204);
        })
    })

    it('Verificar delete com URL erronea', () => {
        const id = "5f1b30a7c0613220acc3ee4b"
        cy.request({method:'DELETE', url:"/projectsss/:" + id, failOnStatusCode: false}).should((response) => {
            expect(response.status).to.eq(400);
        })
    })

    






    








})