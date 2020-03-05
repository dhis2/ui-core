import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the options list has items', () => {
    cy.visitStory('Transfer', 'Available Options')
})

Given('the selected list has items', () => {
    cy.visitStory('Transfer', 'Some Options Selected')
})

Given('the transfer does not have any options', () => {
    cy.visitStory('Transfer', 'No Options')
})

Given('all options have been selected', () => {
    cy.visitStory('Transfer', 'All Options Selected')
})

Given('the selected list does not have items', () => {
    cy.visitStory('Transfer', 'Available Options')
})

Given('the selected list has items', () => {
    cy.visitStory('Transfer', 'Some Options Selected')
})

When('no option items are highlighted', () => {
    cy.get(
        '[data-test="dhis2-uicore-transfer-options"] [data-test="dhis2-uicore-transferoption"]'
    ).each($option => cy.wrap($option).should('not.have.class', 'marked'))
})

When('some option items are highlighted', () => {
    cy.get(
        '[data-test="dhis2-uicore-transfer-options"] [data-test="dhis2-uicore-transferoption"]'
    )
        .first()
        .click()
})

When('no selected items are highlighted', () => {
    cy.get(
        '[data-test="dhis2-uicore-transfer-selected"] [data-test="dhis2-uicore-transferoption"]'
    ).each($option => cy.wrap($option).should('not.have.class', 'marked'))
})

When('some selected items are highlighted', () => {
    cy.get(
        '[data-test="dhis2-uicore-transfer-selected"] [data-test="dhis2-uicore-transferoption"]'
    )
        .first()
        .click()
})

Then("the 'move to selected list' button is disabled", () => {
    cy.get(
        '[data-test="dhis2-uicore-transfer-addindividual"][disabled]'
    ).should('exist')
})

Then("the 'move to selected list' button is enabled", () => {
    cy.get('[data-test="dhis2-uicore-transfer-addindividual"]').should('exist')
    cy.get(
        '[data-test="dhis2-uicore-transfer-addindividual"][disabled]'
    ).should('not.exist')
})

Then("the 'move to options list' button is disabled", () => {
    cy.get(
        '[data-test="dhis2-uicore-transfer-removeindividual"][disabled]'
    ).should('exist')
})

Then("the 'move to options list' button is enabled", () => {
    cy.get('[data-test="dhis2-uicore-transfer-removeindividual"]').should(
        'exist'
    )
    cy.get(
        '[data-test="dhis2-uicore-transfer-removeindividual"][disabled]'
    ).should('not.exist')
})

Then("the 'move all to selected list' button is disabled", () => {
    cy.get('[data-test="dhis2-uicore-transfer-addall"][disabled]').should(
        'exist'
    )
})

Then("the 'move all to selected list' button is enabled", () => {
    cy.get('[data-test="dhis2-uicore-transfer-addall"]').should('exist')
    cy.get('[data-test="dhis2-uicore-transfer-addall"][disabled]').should(
        'not.exist'
    )
})

Then("the 'move all to options list' button is disabled", () => {
    cy.get('[data-test="dhis2-uicore-transfer-removeall"][disabled]').should(
        'exist'
    )
})

Then("the 'move all to options list' button is enabled", () => {
    cy.get('[data-test="dhis2-uicore-transfer-removeall"]').should('exist')
    cy.get('[data-test="dhis2-uicore-transfer-removeall"][disabled]').should(
        'not.exist'
    )
})
