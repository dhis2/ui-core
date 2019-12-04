import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a FileInput that accepts multiple files is rendered', () => {
    cy.visitStory('FileInput', 'Multiple')
})

When('the user selected multiple files', () => {
    cy.get('.file-input input').uploadMultipleFiles(
        [
            { fileType: 'md', fixture: 'FileInput/file.md' },
            { fileType: 'txt', fixture: 'FileInput/file.txt' },
        ],
        true
    )
})

Then("the onChange handler's payload contains multiple files", () => {
    cy.get('@payload').then(payload => {
        const files = payload.files
        expect(files).to.have.lengthOf(2)

        const file1 = files[0]
        expect(file1.name).to.equal('file.md')

        const file2 = files[1]
        expect(file2.name).to.equal('file.txt')
    })
})
