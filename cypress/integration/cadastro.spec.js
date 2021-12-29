import homePage from "../support/pages/home"
import signupPage from '../support/pages/signup'
import successModalPage from '../support/pages/successModal'

describe('Cadastro Entregador', () => {

  let formData;
  beforeEach(() => {
    cy.fixture('formData').then((fd) => {
      formData = fd
   });
  });

  it('Deve ser possível retornar para a home', () => {
    signupPage.go();
    signupPage.returnHome();
    homePage.validateMessages();
  })

  it('Deve ser possível cadastrar um entregador na modalidade Moto', () => {
    homePage.go();
    homePage.accessForm();
    signupPage.fillForm(formData.valid_with_motocycle);
    signupPage.uploadLicense(formData.valid_with_motocycle.cnh);
    signupPage.submit();

    successModalPage.validateModalContent();
  })

  it('Deve ser possível cadastrar um entregador na modalidade Van/Carro', () => {
    homePage.go();
    homePage.accessForm();
    signupPage.fillForm(formData.valid_with_car);
    signupPage.uploadLicense(formData.valid_with_car.cnh);
    signupPage.submit();

    successModalPage.validateModalContent();
  })


  it('Deve ser possível cadastrar um entregador na modalidade Bicicleta sem enviar uma CNH', () => {
    homePage.go();
    homePage.accessForm();
    signupPage.fillForm(formData.valid_with_bike);
    signupPage.submit();

    successModalPage.validateModalContent();
  })

  it('Deve ser exibida a mensagem inline de CPF incorreto', () => {
    homePage.go();
    homePage.accessForm();
    signupPage.fillForm(formData.cpf_inv);
    signupPage.uploadLicense(formData.valid_with_car.cnh);
    signupPage.submit();

    const expectedValues = ['Oops! CPF inválido'];
    signupPage.alertMessagesShouldContain(expectedValues);
  })

  it('Deve exibir mensagens inline quando os campos obrigatórios não forem preenchidos', () => {
    homePage.go();
    homePage.accessForm();
    signupPage.submit();

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

  it('Não deve ser possível se cadastrar para mais de um método de entrega', () => {
    signupPage.go();
    signupPage.fillForm(formData.valid_multiple_delivery_methods);
    signupPage.uploadLicense(formData.valid_with_car.cnh);
    signupPage.submit();

    const expectedValues = ['Oops! Selecione apenas um método de entrega'];
    signupPage.alertMessagesShouldContain(expectedValues);
  })

})