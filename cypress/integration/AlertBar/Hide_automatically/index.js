import '../common/index'
import { Given, When } from 'cypress-cucumber-preprocessor/steps'
import { AlertBar } from '../../../../src'

Given('an AlertBar with a custom duration is rendered', () => {
    cy.visitStory('AlertBar', 'Custom duration')
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})

When('the custom duration has passed', () => {
    cy.wait(2000)
})

Given('a default AlertBar is rendered', () => {
    cy.visitStory('AlertBar', 'Default')
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})

When('the default duration has passed', () => {
    cy.wait(AlertBar.defaultProps.duration)
})
