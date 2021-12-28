class SignupPage {
  go() {
    cy.visit('/');

    cy.get('a[href="/deliver"]').click();
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');
  }

  fillForm(deliveryMan) {
    cy.get('input[name="name"]').type(deliveryMan.name)
    cy.get('input[name="cpf"]').type(deliveryMan.cpf)
    cy.get('input[name="email"]').type(deliveryMan.email)
    cy.get('input[name="whatsapp"]').type(deliveryMan.whatsapp)

    cy.get('input[name="postalcode"]').type(deliveryMan.address.postalcode)
    cy.get('input[type="button"][value="Buscar CEP"]').click()

    cy.get('input[name="address-number"]').type(deliveryMan.address.number)
    cy.get('input[name="address-details"]').type(deliveryMan.address.details)

    cy.get('input[name="address"]').should('have.value', deliveryMan.address.street)

    cy.get('input[name="district"]').should('have.value', deliveryMan.address.district)
    cy.get('input[name="city-uf"]').should('have.value', deliveryMan.address.city_state)

    cy.contains('.delivery-method li', deliveryMan.delivery_method).click()
    cy.get('input[accept="image/*"]').attachFile('/images/' + deliveryMan.cnh)
  }

  submit() {
    cy.get('form button[type="submit"]').click()
  }

  modalContentSouldBe(expectedValue) {
    cy.get('.swal2-container .swal2-html-container').should('have.text', expectedValue)
  }

  alertMessageShouldBe(expectedValue) {
    cy.get('.alert-error').should('have.text', expectedValue)
  }
}

export default new SignupPage;