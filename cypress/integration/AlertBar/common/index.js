import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('the AlertBar will not be visible', () => {
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('not.be.visible')
})
