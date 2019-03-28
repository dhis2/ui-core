Cypress.Commands.add('goToStory', story =>
    cy
        .visit(`http://localhost:5000?path=/story/${story}`)
        .get('#storybook-preview-iframe')
        .then($el => {
            const href = $el.attr('src')
            cy.visit(`http://localhost:5000/${href}`)
        })
)
