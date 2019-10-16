Cypress.Commands.add('visitStory', (namespace, storyName, options = {}) => {
    const formattedNamespace = namespace.toLowerCase()
    const formattedStoryName = storyName.replace(/ /g, '-').toLowerCase()
    const id = `${formattedNamespace}--${formattedStoryName}`

    /**
     * See
     *
     * * https://github.com/cypress-io/cypress/issues/95
     * * https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/stubbing-spying__window-fetch
     * * https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/stubbing-spying__window-fetch/cypress/integration/polyfill-fetch-from-tests-spec.js
     *
     * for an explanation why this is currently necessay...
     */
    return cy.readFile('cypress/assets/unfetch.umd.js').then(content => {
        return cy.visit(`localhost:5000/iframe.html?id=${id}`, {
            ...options,
            onBeforeLoad: win => {
                delete win.fetch
                win.eval(content)
                win.fetch = win.unfetch
                options.onBeforeLoad && options.onBeforeLoad(win)
            },
        })
    })
})
