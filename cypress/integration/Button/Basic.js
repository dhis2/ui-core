context('Button => Basic', () => {
    beforeEach(() => {
        cy.visitStorybook()
    })

    it('should render a Button', () => {
        cy.goToStory('Button', 'Basic')
        cy.sbGet('button.base')
            .should('have.css', 'height', '36px')
            .should('have.css', 'padding-left', '16px')
            .should('have.css', 'padding-right', '16px')
    })
})
