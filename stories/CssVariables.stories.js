import React from 'react'
import { storiesOf } from '@storybook/react'
import { CssVariables } from '../src'

const App = ({ children }) => <div>{children}</div>

storiesOf('CssVariables', module).add('Default', () => (
    <App>
        <CssVariables />

        <p>
            The <code>CssVariables</code> component injects CSS variables in
            the root of the document for all our theme values. This allows
            users that do not use CSS-in-JS to still use our theme values.
        </p>
    </App>
))
