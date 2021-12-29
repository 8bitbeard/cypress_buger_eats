import { Given as Dado, When as Quando, Then as Então } from "cypress-cucumber-preprocessor/steps"
import signupPage from "../../support/pages/signup"

Então('validar o redirecionamento para o formulário de cadastro do Buger Eats', () => {
  signupPage.validate();
})