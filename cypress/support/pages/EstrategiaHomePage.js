/// <reference types="Cypress" />

import EstrategiaElements from '../elements/EstrategiaElements'
const elements = new EstrategiaElements
import DefaultElements from '../elements/DefaultElements'
const d_elements = new DefaultElements
const url = Cypress.config("baseUrl")

class EstrategiaHomePage {
    // Acessar o estrategia
    acessarEstrategia() {
        cy.visit(url)
    }

    // Acessar cursos por professor
    acessarCursosPorProfessor(){
        cy.get(elements.lk_professor()).click()
    }

    // Acessar cursos por Concurso
    acessarCursosPorConcurso(){
        cy.get(elements.lk_concurso()).click()
    }

    // Acessar por máteria
    acessarCursosPorMateria(){
        cy.get(elements.lk_materia()).click()
    }
    
    // Acessar por Regiao
    acessarCursosPorRegiao(){
        cy.get(elements.lk_regiao()).click()
    }

    // Busca Barra Pesquisa
    filtrarPRFPesquisa(){
        cy.get(elements.input_pesquisa()).click().type(d_elements.PRF())
        cy.get(elements.bt_input_pesquisa()).click()

    }


}

export default EstrategiaHomePage;