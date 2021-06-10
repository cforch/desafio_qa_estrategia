import EstrategiaElements from '../elements/EstrategiaElements'
const elements = new EstrategiaElements
import DefaultElements from '../elements/DefaultElements'
const d_elements = new DefaultElements

class MateriaPage{
    
    //filtrar curso Administração p/ Iniciantes
    filtrarCurso(){
        cy.get(elements.filtra_curso()).type(d_elements.adm_inicio())
    }

    validarAdministraçãoInicianteSuperior(){
        cy.get(elements.vl_adm_iniSup()).invoke('text').should('contain', d_elements.adm_inicio_superior())
    }


}

export default MateriaPage;