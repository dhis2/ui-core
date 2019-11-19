import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given('a SplitButton with closed DropMenu is rendered', () => {
    cy.visitStory('SplitButton: Basic', 'Default')
})

When('the SplitButton is clicked', () => {
    cy.get('button:first-child').click()
})

When('the SplitButton arrow icon is clicked', () => {
    cy.get('button:nth-child(2)').click()
})
