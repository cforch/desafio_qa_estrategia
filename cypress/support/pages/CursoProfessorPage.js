import EstrategiaElements from '../elements/EstrategiaElements'
const elements = new EstrategiaElements
import DefaultElements from '../elements/DefaultElements'
const d_elements = new DefaultElements

class CursoProfessorPage {
    
    // escolher cursos disponivel na lista 
    escolherSegundoCurso(){
        cy.get(elements.ANM_curso_profLoiola()).should('contain', d_elements.curso_ingles())
    }

    //clicar em detalhes do curso escolhido
    clicarDetalhes(){
        cy.get(elements.detalhes_SegundoCurso_ProfLoiola()).click()
    }
}

export default CursoProfessorPage;