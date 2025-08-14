
describe('Kanban)', () => {
  // pega o container de cards de uma lista pelo título do header
  const boardCards = (title) =>
    cy.contains('.board-header-title', title)
      .parents('.header')
      .siblings('.board-cards');

  it('creates list, adds and edits card, persists on reload and removes the list', () => {
    // visita limpa o localStorage da app antes de carregar
    cy.visit('/', {
      onBeforeLoad(win) {
        win.localStorage.removeItem('kanban-boards');
      },
    });

    // criar nova lista
    cy.contains('.custom-input p', 'Adicionar outra lista').click();
    cy.get('.custom-input input[type="text"]')
      .should('be.visible')
      .type('Lista Cypress{enter}');

    cy.contains('.board-header-title', 'Lista Cypress', { timeout: 8000 })
      .should('be.visible');

    // adicionar um cartão nessa lista
    boardCards('Lista Cypress').within(() => {
      cy.contains('Adicionar Tarefa').click();
    });

    cy.get('.custom-input input[type="text"]')
      .should('be.visible')
      .type('Cartão Cypress{enter}');

    boardCards('Lista Cypress').contains('Cartão Cypress').should('exist');

    // abrir modal do cartão e editar o título
    boardCards('Lista Cypress').contains('Cartão Cypress').click();

    // no header do modal, o título aparece como texto; clicar nele abre o input
    cy.get('[id$="ModalTitle"]')
      .should('be.visible')
      .within(() => {
        cy.contains('Cartão Cypress').click();               // abre o input
        cy.get('input[type="text"]').clear().type('Cartão Editado');
        cy.get('button.btn').contains('Editar Nome da task').click();
      });

    // fechar o modal clicando no overlay fora do conteúdo
    cy.get('body').click(5, 5);

    // verificar atualização na lista
    boardCards('Lista Cypress').contains('Cartão Editado').should('exist');

    // persistência após recarregar
    cy.reload();
    cy.contains('.board-header-title', 'Lista Cypress', { timeout: 8000 })
      .should('be.visible');
    boardCards('Lista Cypress').contains('Cartão Editado').should('exist');

    // remover a lista criada 
    cy.contains('.board-header-title', 'Lista Cypress')
      .parents('.header')
      .find('.trash')
      .click();

    cy.contains('.board-header-title', 'Lista Cypress').should('not.exist');
  });
});

