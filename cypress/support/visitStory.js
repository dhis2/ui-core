Cypress.Commands.add('visitStory', (namespace, storyName) => {
    const formattedNamespace = namespace.toLowerCase()
    const formattedStoryName = storyName.replace(/ /g, '-').toLowerCase()
    const id = `${formattedNamespace}--${formattedStoryName}`
    cy.visit(`localhost:5000/iframe.html?id=${id}`)
})
