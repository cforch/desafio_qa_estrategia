import EstrategiaElements from '../elements/EstrategiaElements'
const elements = new EstrategiaElements

class BuscaConcursoPage{

    // acessar cursos para Policia Federal
    acessarCursosPF(){
        cy.get(elements.pf_concurso()).click()
    }
   

}

export default BuscaConcursoPage;