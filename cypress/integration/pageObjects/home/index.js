const elements = require('./elements').ELEMENTS;

class HomePage {
  go() {
    cy.visit('/');
  }

  accessForm() {
    cy.get(elements.a_signup).click();
  }

  validateLogo() {
    cy.get(elements.img_logo).should('be.visible');
  }

  validateMessages() {
    cy.get(elements.h1_title).should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    cy.get(elements.p_subtitle).should('have.text', 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.')
    cy.get(elements.str_signup_text).should('have.text', 'Cadastre-se para fazer entregas')
  }
}

export default new HomePage;