import homePage from "../support/pages/home"

describe('Home Page', () => {
  it('Deve ser possível acessar a home page', () => {
    homePage.go();
    homePage.validateMessages();
    homePage.validateLogo();
  })

  it('Deve ser possível acessar o formulário de cadastro de entregadores', () => {
    homePage.go();
    homePage.accessForm();
  })
})