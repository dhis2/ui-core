import React from 'react'
import propTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import { ThemeCssVariables } from '../src'

const App = ({ children }) => <div>{children}</div>

storiesOf('ThemeCssVariables', module).add('Default', () => (
    <App>
        <ThemeCssVariables />

        <p>
            This <span style={{ color: 'var(--colors-blue500)' }}>text</span>{' '}
            uses the{' '}
            <span style={{ color: 'var(--colors-red500)' }}>colors</span> from
            our theme with vanilla css custom properties.
        </p>
    </App>
))

App.propTypes = {
    children: propTypes.any.isRequired,
}
