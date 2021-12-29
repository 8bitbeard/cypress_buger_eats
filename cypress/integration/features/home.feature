# language:pt

@validar_funcionalidade_home
Funcionalidade: Home - Validar Home do Buger Eats
  Como entregador
  Quero acessar a home do Buger Eats
  Para realizar meu cadastro na plataforma

  Contexto:
    Dado acessar a home do Buger Eats

  @#wilton_souza @tribo_qaninja @squad_cypress
  @%home
  @validar_home
  Cenário: Validar exibição da Home do Buger Eats
    Então validar exibição da logo na home da Buger Eats
    E validar textos na home do Buger Eats

  @#wilton_souza @tribo_qaninja @squad_cypress
  @%home
  @validar_acesso_formulario
  Cenário: Validar acesso ao formulário de cadastro
    Quando clicar no botão de cadastro no Buger Eats
    Então validar o redirecionamento para o formulário de cadastro do Buger Eats