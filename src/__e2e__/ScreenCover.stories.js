import React from 'react'
import { storiesOf } from '@storybook/react'
import { ScreenCover } from '../index.js'

window.onClick = window.Cypress.cy.stub()

storiesOf('ScreenCover', module)
    .add('With onClick', () => (
        <ScreenCover onClick={(...args) => window.onClick(...args)} />
    ))
    .add('With children', () => <ScreenCover>I am a child</ScreenCover>)
