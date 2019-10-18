Cypress.Commands.add('visitStory', (namespace, storyName) => {
    const formattedNamespace = namespace.toLowerCase()
    const formattedStoryName = storyName.replace(/ /g, '-').toLowerCase()
    const id = `${formattedNamespace}--${formattedStoryName}`
    cy.visit(`iframe.html?id=${id}`)
})
