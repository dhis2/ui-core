import chaiColors from 'chai-colors'
import { theme, colors } from '../../../src/theme'

chai.use(chaiColors)

context('Button => Kinds', () => {
    context('Destructive', () => {
        beforeEach(() => {
            cy.goToStory('button--destructive')
        })

        it('should have the correct background color when primary', () => {
            cy.get('button.base')
                .should('have.css', 'background-color')
                .and('be.colored', '#b9242b')
        })

        it('should have the correct border color when primary', () => {
            cy.get('button.base')
                .should('have.css', 'border-color')
                .and('be.colored', '#a10b0b')
        })
    })

    context('Primary', () => {
        beforeEach(() => {
            cy.goToStory('button--primary')
        })

        it('should have the correct background color when primary', () => {
            cy.get('button.base')
                .should('have.css', 'background-color')
                .and('be.colored', theme.primary500)
        })

        it('should have the correct border color when primary', () => {
            cy.get('button.base')
                .should('have.css', 'border-color')
                .and('be.colored', theme.primary800)
        })
    })

    context('Button => Secondary', () => {
        beforeEach(() => {
            cy.goToStory('button--secondary')
        })

        it('should have the correct background color when primary', () => {
            cy.get('button.base')
                .should('have.css', 'background')
                .and('to.match', /rgba\(0, 0, 0, 0\)/)
        })

        it('should have the correct border color when primary', () => {
            cy.get('button.base')
                .should('have.css', 'border-color')
                .and('be.colored', colors.grey300)
        })
    })
})
