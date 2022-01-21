const elements = require('./elements').ELEMENTS;

class SignupPage {
  go() {
    cy.visit('/deliver');
  }

  returnHome() {
    cy.get(elements.a_back_home).click()
  }

  validate() {
    cy.get(elements.h1_form_title).should('have.text', 'Cadastre-se para  fazer entregas')
  }

  fillForm(deliveryMan) {
    cy.get(elements.inp_name).type(deliveryMan.name)
    cy.get(elements.inp_cpf).type(deliveryMan.cpf)
    cy.get(elements.inp_email).type(deliveryMan.email)
    cy.get(elements.inp_whatsapp).type(deliveryMan.whatsapp)

    cy.get(elements.inp_postalcode).type(deliveryMan.address.postalcode)
    cy.get(elements.inp_search_postalcode).click()

    cy.get(elements.inp_address_number).type(deliveryMan.address.number)
    cy.get(elements.inp_address_details).type(deliveryMan.address.details)

    cy.get(elements.inp_address).should('have.value', deliveryMan.address.street)

    cy.get(elements.inp_district).should('have.value', deliveryMan.address.district)
    cy.get(elements.inp_city_uf).should('have.value', deliveryMan.address.city_state)
  }

  selectDeliveryMethod(deliveryMethods) {
    deliveryMethods.forEach(deliveryMethod => {
      cy.contains(elements.li_delivery_method, deliveryMethod).click()
    });
  }

  uploadLicense(image) {
    cy.get(elements.inp_upload_license).attachFile('/images/' + image)
  }

  submit() {
    cy.get(elements.btn_submit).click()
  }

  alertMessagesShouldContain(expectedValues) {
    cy.get(elements.span_alert_error).each((element) => {
      expect(expectedValues).to.include(element.text())
    })
  }
}

export default new SignupPage