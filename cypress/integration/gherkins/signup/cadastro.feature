# language:pt

@validar_funcionalidade_cadastro
Funcionalidade: Cadastro - Validar formulário de cadastro do Buger Eats
  Como entregador
  Quero acessar o formulário de cadastro do Buger Eats
  Para realizar meu cadastro na plataforma

  Contexto:
    Dado acessar a página de cadastro do Buger Eats

  @#wilton_souza @tribo_qaninja @squad_cypress
  @%home
  @validar_retorno_home
  Cenário: Validar botão de retorno para a Home do Buger Eats
    Quando clicar no botão de voltar para a home do Buger Eats
    Então validar textos na home do Buger Eats

  @#wilton_souza @tribo_qaninja @squad_cypress
  @%home
  @validar_cadastro_entregador_moto_carro
  Esquema do Cenário: Validar cadastro de entregador no Buger Eats
    Quando preencher os dados de entregador "<tipo>" no formulário
    E realizar o upload da imagem da CNH
    E realizar o envio do formulário de cadastro
    Entao validar que o cadastro foi realizado com sucesso

    Exemplos:
      | tipo                 |
      | valid_with_motocycle |
      | valid_with_car       |

  @#wilton_souza @tribo_qaninja @squad_cypress
  @%home
  @validar_cadastro_entregador_bicicleta
  Cenário: Validar que é possível cadastrar um entregador na modalidade Bicicleta sem enviar uma CNH
    Quando preencher os dados de entregador "valid_with_bike" no formulário
    E realizar o envio do formulário de cadastro
    Entao validar que o cadastro foi realizado com sucesso

  @#wilton_souza @tribo_qaninja @squad_cypress
  @%home
  @validar_cpf_invalido
  Cenário: Validar que não é possível cadastrar um usuário com um CPF inválido
    Quando preencher os dados de entregador "cpf_inv" no formulário
    E realizar o upload da imagem da CNH
    E realizar o envio do formulário de cadastro
    Então validar que é exibida uma mensagem inline para cpf inválido

  @#wilton_souza @tribo_qaninja @squad_cypress
  @%home
  @validar_campos_obrigatórios
  Cenário: Validar mensagens de erro quando os campos obrigatórios não forem preenchidos
    Quando realizar o envio do formulário de cadastro
    Então validar que são exibidas mensagens inline de erro para os campos obrigatórios

  @#wilton_souza @tribo_qaninja @squad_cypress
  @%home
  @validar_erro_cadastro_multiplas_modalidades
  Cenário: Validar que não é possível se cadastrar em mais de uma modalidade de entrega
    Quando preencher os dados de entregador "valid_multiple_delivery_methods" no formulário
    E realizar o upload da imagem da CNH
    E realizar o envio do formulário de cadastro
    Então validar que é exibida uma mensagem inline de erro para múltiplas modalidades
