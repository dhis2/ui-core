context('Button => Basic', () => {
    it('should add type "button" to the button when no type provided', () => {
        cy.goToStory('button--type-button-default')
        cy.get('button.base').should('have.attr', 'type', 'button')
    })

    it('should add type "button" to the button', () => {
        cy.goToStory('button--type-button')
        cy.get('button.base').should('have.attr', 'type', 'button')
    })

    it('should add type "reset" to the button', () => {
        cy.goToStory('button--type-reset')
        cy.get('button.base').should('have.attr', 'type', 'reset')
    })

    it('should add type "submit" to the button', () => {
        cy.goToStory('button--type-submit')
        cy.get('button.base').should('have.attr', 'type', 'submit')
    })
})
