import '../common/index'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('the dropdown is rendered', () => {
    cy.get('.dropdown-button-dropmenu').should('exist')
})
