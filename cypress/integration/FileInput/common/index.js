import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a FileInput with no files is rendered', () => {
    cy.visitStory('FileInput', 'Default')
})

Given('the FIleInput is provided with an onChange handler', () => {
    cy.window().then(win => {
        win.noLog = true
        win.onChange = cy.stub()
    })
})
