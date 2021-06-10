import EstrategiaElements from '../elements/EstrategiaElements'
const elements = new EstrategiaElements
import DefaultElements from '../elements/DefaultElements'
const d_elements = new DefaultElements

class PesquisaPage{
    validarPacoteCompletoPRFPreEdital(){
        cy.get(elements.vl_pacote_PRF()).invoke('text').then(text => {
            expect(text).to.eq(d_elements.pacote_PRF())
        })
    }

}
export default PesquisaPage;