import homePage from "../support/pages/home"

describe('Home Page', { tags: '@validar_funcionalidade_home' }, () => {

  it('Deve ser possível acessar a home page', {
    tags: [
      '@#wilton_souza',
      '@validar_pagina_home'
    ]
  }, () => {
    homePage.go();
    homePage.validateMessages();
    homePage.validateLogo();
  })

  it('Deve ser possível acessar o formulário de cadastro de entregadores', {
    tags: [
      '@#wilton_souza',
      '@validar_acesso_cadastro'
    ]
  }, () => {
    homePage.go();
    homePage.accessForm();
  })
})