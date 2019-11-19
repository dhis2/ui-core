const urlEncodeStoryBookName = name =>
    name
        .replace(/\(|\)/g, '')
        .replace(/[^a-zA-Z0-9]+/g, '-')
        .toLowerCase()

Cypress.Commands.add('visitStory', (namespace, storyName) => {
    const formattedNamespace = urlEncodeStoryBookName(namespace)
    const formattedStoryName = urlEncodeStoryBookName(storyName)
    const id = `${formattedNamespace}--${formattedStoryName}`
    cy.visit(`iframe.html?id=${id}`)
})
