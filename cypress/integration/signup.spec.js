import homePage from "../support/pages/home"
import signupPage from '../support/pages/signup'
import successModalPage from '../support/pages/successModal'
import signupFactory from '../factories/SignupFactory'

describe('Cadastro Entregador', { tags: '@validar_funcionalidade_cadastro' }, () => {

  let formData;
  beforeEach(() => {
    cy.fixture('formData').then((fd) => {
      formData = fd
   });
  });

  it('Deve ser possível retornar para a home', {
    tags: [
      '@#wilton_souza',
      '@validar_retorno_home'
    ]
  }, () => {
    signupPage.go();
    signupPage.returnHome();
    homePage.validateMessages();
  })

  it('Deve ser possível cadastrar um entregador na modalidade Moto', {
    tags: [
      '@#wilton_souza',
      '@validar_cadastro_moto'
    ]
  }, () => {

    var deliverData = signupFactory.deliver();

    homePage.go();
    homePage.accessForm();
    signupPage.fillForm(deliverData);
    signupPage.selectDeliveryMethod(formData.motorcycle);
    signupPage.uploadLicense(deliverData.cnh);
    signupPage.submit();

    successModalPage.validateModalContent();
  })

  it('Deve ser possível cadastrar um entregador na modalidade Van/Carro', {
    tags: [
      '@#wilton_souza',
      '@validar_cadastro_carro'
    ]
  }, () => {
    var deliverData = signupFactory.deliver();

    homePage.go();
    homePage.accessForm();
    signupPage.fillForm(deliverData);
    signupPage.selectDeliveryMethod(formData.car);
    signupPage.uploadLicense(deliverData.cnh);
    signupPage.submit();

    successModalPage.validateModalContent();
  })


  it('Deve ser possível cadastrar um entregador na modalidade Bike Elétrica sem enviar uma CNH', {
    tags: [
      '@#wilton_souza',
      '@validar_cadastro_bike_eletrica'
    ]
  }, () => {
    var deliverData = signupFactory.deliver();

    homePage.go();
    homePage.accessForm();
    signupPage.fillForm(deliverData);
    signupPage.selectDeliveryMethod(formData.bike);
    signupPage.submit();

    successModalPage.validateModalContent();
  })

  it('Deve ser exibida a mensagem inline de CPF incorreto', {
    tags: [
      '@#wilton_souza',
      '@validar_erro_cpf_invalido'
    ]
  }, () => {
    var deliverData = signupFactory.deliver();
    deliverData.cpf = '123456789aa'

    homePage.go();
    homePage.accessForm();
    signupPage.fillForm(deliverData);
    signupPage.selectDeliveryMethod(formData.motorcycle);
    signupPage.uploadLicense(deliverData.cnh);
    signupPage.submit();

    const expectedValues = ['Oops! CPF inválido'];
    signupPage.alertMessagesShouldContain(expectedValues);
  })

  it('Deve exibir mensagens inline quando os campos obrigatórios não forem preenchidos', {
    tags: [
      '@#wilton_souza',
      '@validar_erro_campos_obrigatórios'
    ]
  }, () => {
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

  it('Não deve ser possível se cadastrar para mais de um método de entrega', {
    tags: [
      '@#wilton_souza',
      '@validar_erro_multiplos_metodos_entrega'
    ]
  }, () => {

    var deliverData = signupFactory.deliver();

    signupPage.go();
    signupPage.fillForm(deliverData);
    signupPage.selectDeliveryMethod(formData.all);
    signupPage.uploadLicense(deliverData.cnh);
    signupPage.submit();

    const expectedValues = ['Oops! Selecione apenas um método de entrega'];
    signupPage.alertMessagesShouldContain(expectedValues);
  })
})