import { expect } from 'chai'
import EstrategiaElements from '../elements/EstrategiaElements'
const elements = new EstrategiaElements
import DefaultElements from '../elements/DefaultElements'
const d_elements = new DefaultElements

class CursoPage {
        
    compararValorParceladoComTotal(){
        // Esse metodo valida o valor parcelado na pagina do curso igual ao valor total do curso
        cy.get(elements.valorParceladoDetalhes()).invoke('text').then(text => {
            const num1 = parseInt(text.substring(4,6))*parseInt(text.substring(14,15))
            cy.get(elements.valorTotalDetalhes()).invoke('text').then(text => {
                const num2 = parseInt(text.substring(4,6))
                expect(num1).to.equal(num2)
            })
        })
    }

   validarValoresDetalhesListagem(){
       // Esse metodo valida o valor total em Detalhes com o valor parcelado na listagem de cursos.
       // Os dois valores devem ser iguais.
       cy.get(elements.valorTotalDetalhes()).invoke('text').then(text => {
           const num1 = parseInt(text.substring(4,6))
           cy.go('back')
           cy.get(elements.valorParceladoListagem()).invoke('text').then(text => {
            const num2 = parseInt(text.substring(14,17))*parseInt(text.substring(24))
            expect(num1).to.equal(num2)
            })
       })
   }

   validarInformaçãoCargaHoraria(){
    cy.get(elements.inf_carga_horaria()).invoke('text').then(text => {
        expect(text.substring(1,9)).to.eq(d_elements.carga_horaria())
    })
}

validarInformaçãoDeCertificado(){
    cy.get(elements.inf_certificado()).invoke('text').then(text => {
        expect(text.substring(1,53)).to.eq(d_elements.certificado())
    })
}

   validarInfoConcursoParana(){
       cy.get(elements.vl_infs_conc_parana()).should('be.visible')
       cy.get(elements.tl_concurso_esp_PR()).should('contain', d_elements.concurso_PR())
   }
}
export default CursoPage;