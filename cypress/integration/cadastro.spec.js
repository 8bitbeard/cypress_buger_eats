import signupPage from '../pages/SignupPage'

describe('Cadastro', () => {

  let deliveryMan;
  beforeEach(() => {
   deliveryMan = cy.fixture('deliveryMan').then((d) => {
     deliveryMan = d
   });
  });

  it('Usuário deve se tornar um enrtregador', () => {

    cy.log(deliveryMan)

    signupPage.go();
    signupPage.fillForm(deliveryMan.signup);
    signupPage.submit();

    const expectedValue = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
    signupPage.modalContentSouldBe(expectedValue);
  })

  it('CPF incorreto', () => {

    signupPage.go();
    signupPage.fillForm(deliveryMan.cpf_inv);
    signupPage.submit();

    const expectedValue = 'Oops! CPF inválido';
    signupPage.alertMessageShouldBe(expectedValue);
  })
})