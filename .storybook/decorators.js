import React, { Fragment } from 'react'
import { addDecorator } from '@storybook/react'

import { CssReset } from '../src/index.js'

addDecorator(fn => (
    <Fragment>
        <CssReset />
        {fn()}
    </Fragment>
))

addDecorator(fn => (
    <Fragment>
        {fn()}

        <style jsx>{`
            :global(html) {
                height: 100%;
            }
            :global(body) {
                height: 100%;
                min-height: 100%;
            }
            :global(#root) {
                height: 100%;
                padding: 16px;
            }
        `}</style>
    </Fragment>
))
