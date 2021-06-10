import { expect } from 'chai'
import EstrategiaElements from '../elements/EstrategiaElements'
const elements = new EstrategiaElements
import DefaultElements from '../elements/DefaultElements'
const d_elements = new DefaultElements

class ConcursoPage{
    
    //validar tela 
    validarConcursoPagePF(){
        cy.get(elements.vl_pf_concurso()).invoke('text').then(text => {
            expect(text.substring(3)).to.eq(d_elements.cursos_PF())
        })
    }

    //validar quantidade de concursos disponiveis
    validarQtdCursosDisponiveis(){
        cy.get(elements.vl_qtd_disponivel()).invoke('text').then(text => {
            expect(text).to.eq(d_elements.qtd_disponiveis())
        })
    }
}

export default ConcursoPage;