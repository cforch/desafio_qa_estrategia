import EstrategiaElements from '../elements/EstrategiaElements'
const elements = new EstrategiaElements
import DefaultElements from '../elements/DefaultElements'
const d_element = new DefaultElements

class BuscaMateriaPage{
    
    //validar tela 
    validarBuscaMateriaPage(){
        cy.get(elements.vl_buscaMateria()).invoke('text').should("contain", d_element.materia_page())
    }

    // acessar máteria Administração
    acessarAdministração(){
        cy.get(elements.es_administracao()).click()
    }

}

export default BuscaMateriaPage;