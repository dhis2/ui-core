import '../common/index'
import { Given, When } from 'cypress-cucumber-preprocessor/steps'
import { AlertBar } from '../../../../src'

Given('an AlertBar with a custom timeout is rendered', () => {
    cy.visitStory('AlertBar', 'Custom timeout')
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})

When('the custom time has passed', () => {
    cy.wait(2000)
})

Given('a default AlertBar is rendered', () => {
    cy.visitStory('AlertBar', 'Default timeout')
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})

When('the default time has passed', () => {
    cy.wait(AlertBar.defaultProps.duration)
})
