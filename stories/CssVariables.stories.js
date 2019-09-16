import React from 'react'
import propTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import { CssVariables } from '../src'

const App = ({ children }) => <div>{children}</div>

storiesOf('CssVariables', module).add('Default', () => (
    <App>
        <CssVariables variables={{ 'color-red': '#a83c32' }} />

        <p>
            This <span style={{ color: 'var(--color-red)' }}>text</span> uses
            the vanilla CSS{' '}
            <span style={{ color: 'var(--color-red)' }}>--color-red</span>{' '}
            custom property set by the CssVariables component.
        </p>
    </App>
))

App.propTypes = {
    children: propTypes.any.isRequired,
}
