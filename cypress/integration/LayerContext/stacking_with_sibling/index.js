import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given(
    'a blocking layer is a child of an applicationTop layer and sibling of a nested set of applicationTop layers',
    () => {
        cy.visitStory('Layer (computed zIndex)', 'Incorrect Layer On Top')
    }
)
Then('the blocking layer should be on top and thus clickable', () => {
    // cy.get('[data-test="blocking-layer"]').then($blockingLayer => {
    //     cy.get('[data-test="application-top-layer"]').then(
    //         $applicationTopLayer => {
    //             const blockingLayerZIndex = parseInt(
    //                 $blockingLayer.css('z-index')
    //             )
    //             const applicationTopLayerZIndex = parseInt(
    //                 $applicationTopLayer.css('z-index')
    //             )
    //             expect(blockingLayerZIndex).to.be.greaterThan(
    //                 applicationTopLayerZIndex
    //             )
    //         }
    //     )
    // })
    cy.get('[data-test="blocking-layer"]').click()
})
