import { hexStringToByte } from './uploadFile/hexStringToByte'

/**
 * @param {string} fileType
 * @param {string} fixture
 * @param {string} selector
 */
function uploadSingleFile(fileType, fixture, selector) {
    cy.fixture(fixture, 'hex')
        .then(fileHex => {
            const fileBytes = hexStringToByte(fileHex)
            const fileName = fixture.replace(/.+\//g, '')
            const testFile = new File([fileBytes], fileName, {
                type: fileType,
            })
            const dataTransfer = new DataTransfer()
            dataTransfer.items.add(testFile)

            return dataTransfer.files
        })
        .as('file')

    cy.get(selector).as('element')
    cy.get('@element').then($el =>
        cy.get('@file').then(files => {
            $el[0].files = files
        })
    )
    cy.get('@element').trigger('change', { force: true })
}

Cypress.Commands.add('uploadSingleFile', uploadSingleFile)