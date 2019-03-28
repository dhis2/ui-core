import chaiColors from 'chai-colors'
import { colors } from '../../../src/theme'

chai.use(chaiColors)

context('Button => Basic', () => {
    it('should have the right box model values', () => {
        cy.goToStory('button--basic')
        cy.get('button.base')
            .should('have.css', 'height', '36px')
            .should('have.css', 'padding-left', '16px')
            .should('have.css', 'padding-right', '16px')
    })

    it('should have the correct background color in default state', () => {
        cy.goToStory('button--basic')
        cy.get('button.base')
            .should('have.css', 'background-color')
            .and('be.colored', colors.grey100)
    })

    it('should have the correct border color in default state', () => {
        cy.goToStory('button--basic')
        cy.get('button.base')
            .should('have.css', 'border-color')
            .and('be.colored', colors.grey400)
    })

    it('should have the correct background color when focused', () => {
        cy.goToStory('button--basic')
        cy.get('button.base')
            .focus()
            .should('have.css', 'background-color')
            .and('be.colored', colors.grey100)
    })

    it('should have the correct border color when focused', () => {
        cy.goToStory('button--basic')
        cy.get('button.base')
            .focus()
            .should('have.css', 'border-color')
            .and('be.colored', colors.blue600)
    })

    it('should display the text provided as children', () => {
        cy.goToStory('button--basic')
        cy.get('button.base').should('contain', '')
    })

    it('should expose a working onClick api', () => {
        cy.goToStory('button--basic')
        cy.get('button.base').click()
        cy.get('.amount').should('contain', '1')
    })

    it('should display the text provided via label prop', () => {
        cy.goToStory('button--default-with-label-prop')
        cy.get('button.base').should('contain', 'Button label')
    })
})
