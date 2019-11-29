import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a FileInput that accepts multiple files is rendered', () => {
    cy.visitStory('FileInput', 'Multiple')
})

Given('the FileInput has some files attached', () => {
    cy.get('.file-input input').uploadMultipleFiles([
        { fileType: 'foo', fixture: 'FileInput/file.foo' },
        { fileType: 'bar', fixture: 'FileInput/file.bar' },
    ])
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

Then("the onChange handler's payload contains all files", () => {
    cy.get('@payload').then(payload => {
        const files = payload.files
        expect(files).to.have.lengthOf(4)

        const file1 = files[0]
        expect(file1.name).to.equal('file.foo')

        const file2 = files[1]
        expect(file2.name).to.equal('file.bar')

        const file3 = files[2]
        expect(file3.name).to.equal('file.md')

        const file4 = files[3]
        expect(file4.name).to.equal('file.txt')
    })
})
