const elements = require('./elements').ELEMENTS;

class SuccessModal {
  validateModalContent() {
    cy.get(elements.h2_title).should('be.visible').should('have.text', 'Aí Sim...')
    cy.get(elements.div_subtitle).should('be.visible').should('have.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
    cy.get(elements.btn_close).should('be.visible')
  }
}

export default new SuccessModal;