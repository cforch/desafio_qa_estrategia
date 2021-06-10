import EstrategiaElements from '../elements/EstrategiaElements'
const elements = new EstrategiaElements
import DefaultElements from '../elements/DefaultElements'
const d_element = new DefaultElements

class BuscaProfessorPage {
    // validar pagina busca curso por professor
    validaPagina() {
        cy.get(elements.vl_por_professor()).should('contain', d_element.busca_cursos_professor())
    }

    selecionarProfEnaLoiola(){
        cy.get(elements.lk_profEnaLoiola()).scrollIntoView().click()
    }

}

export default BuscaProfessorPage;