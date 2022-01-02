import { Given as Dado, When as Quando, Then as Então } from "cypress-cucumber-preprocessor/steps"
import homePage from "../pageObjects/home"

Dado('acessar a home do Buger Eats', () => {
  homePage.go();
});

Quando('clicar no botão de cadastro no Buger Eats', () => {
  homePage.accessForm();
});

Então('validar exibição da logo na home da Buger Eats', () => {
  homePage.validateLogo();
});

Então('validar textos na home do Buger Eats', () => {
  homePage.validateMessages();
});