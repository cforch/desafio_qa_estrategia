Feature: Busca e Visualização de cursos

    Background: Acessar área de cursos por professor
        Given Acessar Estrategia Concursos

        Scenario: Validar busca por professor e valores do curso
            When selecionar Por Professor
            And acessar os cursos da professora Ena Loiola
            And escolher um curso disponível na lista de cursos da professora usando o filtro
            And clicar em Detalhes
            Then o valor total do curso escolhido na listagem deve bater com o valor total da página de detalhes
            And o valor parcelado deve bater com o valor total do curso 
            And deve ter informação de carga horária 
            And deve ter informação de receber certificado
        
        Scenario: Validar quantidade de cursos disponiveis da PF em busca por Concursos Destaques
            When selecionar Por Concurso
            And acessar os cursos para Polícia Federal
            Then deve ter informação sobre quantidade de cursos disponiveis

        Scenario: Validar se há Administração p/ Iniciantes Nivel Superior usando filtro em Buscar por matéria
            When selecionar Por Máteria
            And acessar máteria de Administração
            And filtrar Administração p/ Iniciantes
            Then deve haver curso de Administração p/ Iniciantes Nivel Superior em Busca por Máteria

        Scenario: Validar alteração de Região em Buscar Por Região
            When selecionar po Região
            And escolher região Paraná
            Then validar Página de Cursos em Paraná
            And alterar para região Goiás
            Then validar Página de Cursos em Goiás

        Scenario: Validar curso escolhido da região Paraná em Busca Por Região
            When selecionar po Região
            And escolher região Paraná
            And escolher curso específico da região Paraná
            Then deve validar informações sobre o concurso da região Paraná

        Scenario: Validar pesquisa de curso Pelo Campo de Busca (PRF – Pacote Completo - Pré Edital)
            When busca na barra de pesquisa por PRF
            Then deve aparecer o pacote completo Pré Edital da PRF