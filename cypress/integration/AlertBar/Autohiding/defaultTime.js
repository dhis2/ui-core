import '../common/index'
import { Given, When } from 'cypress-cucumber-preprocessor/steps'
import { AlertBar } from '../../../../src'

Given('an AlertBar will hide after the default time', () => {
    cy.visitStory('AlertBar', 'auto hiding')
        .get('.fifth')
        .as('AlertBar')

    cy.get('@AlertBar').should('be.visible')
})

When('the default time has passed', () => {
    cy.wait(AlertBar.defaultProps.duration)
})
