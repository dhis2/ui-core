import '../common/index'
import { Given, When } from 'cypress-cucumber-preprocessor/steps'
import { AlertBar } from '../../../../src'

/**
 * AlertBar hides automatically after a custom time
 * ================================================
 */
Given('an AlertBar will hide after a custom time', () => {
    cy.visitStory('AlertBar', 'Auto hiding')
        .get('.fourth')
        .as('AlertBar')

    cy.get('@AlertBar').should('be.visible')
})

When('the custom time has passed', () => {
    cy.wait(2000)
})

/**
 * AlertBar hides automatically after the default time
 * ===================================================
 */
Given('an AlertBar will hide after the default time', () => {
    cy.visitStory('AlertBar', 'auto hiding')
        .get('.fifth')
        .as('AlertBar')

    cy.get('@AlertBar').should('be.visible')
})

When('the default time has passed', () => {
    cy.wait(AlertBar.defaultProps.duration)
})
