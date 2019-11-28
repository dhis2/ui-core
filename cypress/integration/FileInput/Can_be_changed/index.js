import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a FileInput with no files is rendered', () => {
    cy.visitStory('FileInput', 'Default')
})

Given('the FIleInput is provided with an onChange handler', () => {
    cy.window().then(win => {
        win.noLog = true
        win.onChange = cy.stub()
    })
})

When('a file is selected', () => {
    cy.uploadFile('.md', 'FileInput/file.md', 'input')
})

Then('the onChange handler is called', () => {
    cy.window().then(win => {
        const calls = win.onChange.getCalls()
        expect(calls).to.have.lengthOf(1)

        const callArgs = calls[0].args
        expect(callArgs).to.have.lengthOf(2)

        const payload = callArgs[0]
        expect(Object.keys(payload)).to.include.members(['files', 'name'])

        const files = payload.files
        expect(files).to.have.lengthOf(1)

        const file = files[0]
        expect(file.name).to.equal('file.md')
    })
})
