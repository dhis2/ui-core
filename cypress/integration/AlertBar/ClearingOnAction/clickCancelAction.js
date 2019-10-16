import '../common/index'
import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given('an AlertBar has a "Cancel" action', () => {
    cy.visit('localhost:5000/iframe.html?id=alertbar--with-actions')
        .get('.info')
        .as('AlertBar')

    cy.get('@AlertBar').should('be.visible')
})

When('the user clicks on the "Cancel" button', () => {
    cy.get('span:contains("Cancel")').click()
})
