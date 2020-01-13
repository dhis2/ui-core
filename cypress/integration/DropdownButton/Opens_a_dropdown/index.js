import '../common/index'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a DropdownButton with closed dropdown is rendered', () => {
    cy.visitStory('DropdownButton', 'Closed')
})

Given('a DropdownButton with opened dropdown is rendered', () => {
    cy.visitStory('DropdownButton', 'Closed')
    cy.get('[data-test="dhis2-uicore-dropdownbutton"]').click()
    cy.get('[data-test="dhis2-uicore-dropmenu"]').should('exist')
})

Then('the dropdown is not rendered', () => {
    cy.get('[data-test="dhis2-uicore-dropmenu"]').should('not.exist')
})

Then('the dropdown is rendered', () => {
    cy.get('[data-test="dhis2-uicore-dropmenu"]').should('exist')
})
