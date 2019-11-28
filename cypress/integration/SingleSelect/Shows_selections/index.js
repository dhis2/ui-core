import '../common'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('the selection is displayed', () => {
    cy.contains('option one').should('exist')
})
