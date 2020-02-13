import { storiesOf } from '@storybook/react'
import React from 'react'
import { MenuItem } from '../index.js'

window.onClick = window.Cypress.cy.stub()

storiesOf('MenuItem', module)
    .add('With onClick and value', () => (
        <MenuItem
            label="Menu item"
            value="Value"
            onClick={(...args) => window.onClick(...args)}
        />
    ))
    .add('With href', () => <MenuItem label="Menu item" href="url.test" />)
    .add('With icon', () => (
        <MenuItem label="Menu item" icon={<div>Icon</div>} />
    ))
    .add('With label', () => <MenuItem label="Label" />)
