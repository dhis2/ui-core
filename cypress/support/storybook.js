Cypress.Commands.add('visitStorybook', () => cy.visit('http://localhost:5000'))

Cypress.Commands.add('sbGet', selector =>
    cy.get('@iframeDoc').then(doc => cy.wrap(doc.find(selector)))
)

Cypress.Commands.add('switchToStoryBookContext', () =>
    cy
        .get('#storybook-preview-iframe')
        .then($iframe => $iframe.contents())
        .as('iframeDoc')
)

Cypress.Commands.add('goToStory', (context, story) => {
    cy.get(`[title="${context}"]`)
        .parent()
        .get(`[title="${story}"]`)
        .click()
        .switchToStoryBookContext()
})
