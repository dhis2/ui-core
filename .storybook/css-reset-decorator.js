import React, { Fragment } from 'react'

import { CssReset } from '../src/index.js'

const CssResetWrapper = fn => (
    <Fragment>
        <CssReset />
        {fn()}
    </Fragment>
)

export { CssResetWrapper }
