Feature: Testar API

    Background: Tenho API padrão
        Given que eu tenho API padrão

        Scenario: Registrar novo usuario 
            And tenho dados do novo usuario (name, email e password)
            When POST em "/auth/register"
            Then devo receber codigo 200
            And devo receber informação do usuario (name, email)
            And devo receber token

        Scenario: Registrar usuario existente
            And tenho dados de usuario existente (name, email e password)
            When POST em "/auth/register"
            Then devo receber codigo 409

        Scenario: Login Usuario Registrado
            And tenho dados do usuario cadastrado (email e password)
            When POST em "/auth/authenticate"
            Then devo receber codigo 200
            And devo receber informação do usuario (name, email)
            And devo receber token

        Scenario: Login Usuario Inexistente
            And tenho dados do usuario inexistente (email e password)
            When POST em "/auth/authenticate"
            Then devo receber codigo 401

        Scenario: Criar novo projeto
            And token recebido do Login
            And tenho dados do novo projeto(titulo, descrição, nome, responsavel)
            When POST em "/projects" usando token como auth
            Then devo receber codigo 200
            And devo receber informações do projeto

        Scenario: Verificar todos os projetos existentes
            And token recebido do Login
            When GET em "/projects" usando token como auth
            Then devo receber codigo 200
            And devo receber todos os projetos existentes

        Scenario: Verificar projeto especifico existente
            And token recebido do Login
            When GET em "/projects/{projectID}" usando token como auth
            Then devo receber codigo 200
            And devo receber informação do projeto especifico existente

        Scenario: Verificar projeto não existente
            And token recebido do Login
            When GET em "/projects/{projectIDnãoExistente}" usando token como auth
            Then devo receber codigo 404

        Scenario: Validar aplicação ao tentar verificar projeto sem token auth
            And token recebido do Login
            When GET em "/projects/{projectID}" usando token sem auth
            Then devo receber codigo 401
            And mensagem de não autorização

        Scenario: Atualizar projeto especifico existente
            And token recebido do Login
            And tenho os dados atualizados do projeto existente(titulo, descrição, nome, responsavel)
            When PUT em "/projects/{projectID}" usando token como auth
            Then devo receber codigo 201
            And devo receber as informações atualizadas do projeto

        Scenario: Deletar projeto especifico existente
            When DELETE em "/projects/{projectID}"
            Then devo receber codigo 200

        Scenario: Verificar delete com URL erronea.
            When DELETE em "/projectos/{projectID}"
            Then devo receber codigo 400
