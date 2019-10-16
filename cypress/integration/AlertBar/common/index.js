import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('the AlertBar will not be visible', () => {
    cy.get('@AlertBar').should('not.exist')
})
