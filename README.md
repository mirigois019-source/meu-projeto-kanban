# meu-projeto-kanban
Referencias para estudo e entrega:https://www.youtube.com/watch?v=56N0P67ffIA
https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test?utm_source=chatgpt.com



Funcionalidade: Quadro Kanban

  Como usuário do quadro Kanban
  Quero gerenciar listas e cartões
  Para poder organizar minhas tarefas de forma eficiente
  
    Dado que eu acesso o quadro Kanban
    E o localStorage foi limpo

  Cenário: Criar uma nova lista
    Quando eu clico em "Adicionar outra lista"
    E eu digito "Lista Cypress" e pressiono enter
    Então eu devo ver uma lista com o título "Lista Cypress"

  Cenário: Adicionar um cartão à lista
    Dado que a lista "Lista Cypress" existe
    Quando eu clico em "Adicionar Tarefa" na lista "Lista Cypress"
    E eu digito "Cartão Cypress" e pressiono enter
    Então eu devo ver um cartão com o título "Cartão Cypress" na lista "Lista Cypress"

  Cenário: Editar o título de um cartão
    Dado que o cartão "Cartão Cypress" existe na lista "Lista Cypress"
    Quando eu clico no cartão "Cartão Cypress"
    E eu edito o título para "Cartão Editado"
    Então eu devo ver o cartão com o título "Cartão Editado" na lista "Lista Cypress"

  Cenário: Persistência dos dados após recarregar
    Dado que o cartão "Cartão Editado" existe na lista "Lista Cypress"
    Quando eu recarrego a página
    Então eu devo ver a lista "Lista Cypress"
    E eu devo ver o cartão "Cartão Editado" na lista "Lista Cypress"

  Cenário: Remover uma lista
    Dado que a lista "Lista Cypress" existe
    Quando eu clico no botão de lixeira na lista "Lista Cypress"
    Então eu não devo ver a lista "Lista Cypress"
