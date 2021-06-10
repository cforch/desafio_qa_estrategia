import EstrategiaElements from '../elements/EstrategiaElements'
const elements = new EstrategiaElements
import DefaultElements from '../elements/DefaultElements'
const d_elements = new DefaultElements

class BuscaRegiaoPage {
    // validar tela regiao
    validarRegiaoPage(){
        cy.get(elements.vl_regiao_page()).invoke('text').then(text => {
            expect(text, d_elements.busca_cursos_regiao())
        })
    }
    // escolher região Paraná
    escolherParana(){
        cy.get(elements.es_parana()).click()
    }

    // validar curso Paraná
    validarRegiaoParana(){
        cy.get(elements.vl_regiao_estado()).invoke('text').then(text => {
            expect(text, d_elements.cursos_parana())
        })
    }
    // escolher região Goiás
    escolherGoias(){
        cy.get(elements.es_goias()).click()
    }
    // validar curso Goiás
    validarRegiaoGoias(){
        cy.get(elements.vl_regiao_estado()).invoke('text').then(text => {
            expect(text, d_elements.cursos_goias())
        })
    }
    // escolher curso espefico do parana
    escolherCursoParana(){
        cy.get(elements.es_curso_parana()).scrollIntoView().click()
    }
    
}

export default BuscaRegiaoPage;