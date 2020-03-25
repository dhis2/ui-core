import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given(
    'a blocking layer is a child of an applicationTop layer and sibling of a nested set of applicationTop layers',
    () => {
        cy.visitStory('Layer (stacking)', 'Incorrect Layer On Top')
    }
)
Then('the blocking layer should be on top and thus clickable', () => {
    cy.get('[data-test="blocking-layer"]').click()
})
