/* global cy */

import { AlertBar } from '../../src'

describe('AlertBar', () => {
    describe('Autohiding', () => {
        it('should hide the .fifth alert bar after the default time', () => {
            cy.visit('localhost:5000/iframe.html?id=alertbar--auto-hiding')
                .get('.fifth')
                .should('be.visible')

            cy.wait(AlertBar.defaultProps.duration)
                .get('.fifth')
                .should('not.exist')
        })

        it('should hide the .fourth alert bar after the custom time', () => {
            cy.visit('localhost:5000/iframe.html?id=alertbar--auto-hiding')
                .get('.fourth')
                .should('be.visible')

            cy.wait(2000)
                .get('.fourth')
                .should('not.exist')
        })
    })

    describe('Clearing on action click', () => {
        it('should hide the alertbar when clicking on an action', () => {
            cy.visit('localhost:5000/iframe.html?id=alertbar--with-actions')
                .get('.info')
                .should('be.visible')
                .get('span:contains("Cancel")')
                .click()
                .get('.info')
                .should('not.exist')
        })
    })
})
