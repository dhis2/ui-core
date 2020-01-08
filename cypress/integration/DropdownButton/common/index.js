import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given('a DropdownButton with closed dropdown is rendered', () => {
    cy.visitStory('DropdownButton: Basic', 'Default')
})

When('the DropdownButton is clicked', () => {
    cy.get('[data-test="dhis2-uicore-dropdownbutton"]').click()
})
