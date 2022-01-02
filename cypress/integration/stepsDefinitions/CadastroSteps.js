import { Given as Dado, When as Quando, Then as Então } from "cypress-cucumber-preprocessor/steps"

import signupPage from "../pageObjects/signup"
import successModal from "../pageObjects/successModal"

let formData
beforeEach(() => {
  cy.fixture('formData').then((data) => {
    formData = data
  })
})

Dado('acessar a página de cadastro do Buger Eats', () => {
  signupPage.go();
});

Quando('clicar no botão de voltar para a home do Buger Eats', () => {
  signupPage.returnHome();
});

Quando('preencher os dados de entregador {string} no formulário', (type) => {
  signupPage.fillForm(formData[type])
});

Quando('realizar o upload da imagem da CNH', () => {
  signupPage.uploadLicense('cnh-digital.jpg');
});

Quando('realizar o envio do formulário de cadastro', () => {
  signupPage.submit();
});

Então('validar o redirecionamento para o formulário de cadastro do Buger Eats', () => {
  signupPage.validate();
});

Então('validar que o cadastro foi realizado com sucesso', () => {
  successModal.validateModalContent();
});

Então('validar que é exibida uma mensagem inline para cpf inválido', () => {
  const expectedValues = ['Oops! CPF inválido'];
  signupPage.alertMessagesShouldContain(expectedValues);
})

Então('validar que são exibidas mensagens inline de erro para os campos obrigatórios', () => {
  const expectedValues = [
    'É necessário informar o nome',
    'É necessário informar o CPF',
    'É necessário informar o email',
    'É necessário informar o CEP',
    'É necessário informar o número do endereço',
    'Selecione o método de entrega',
    'Adicione uma foto da sua CNH'
  ];
  signupPage.alertMessagesShouldContain(expectedValues);
})

Então('validar que é exibida uma mensagem inline de erro para múltiplas modalidades', () => {
  const expectedValues = ['Oops! Selecione apenas um método de entrega'];
  signupPage.alertMessagesShouldContain(expectedValues);
})