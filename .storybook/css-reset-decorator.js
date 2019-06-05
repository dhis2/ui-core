import React, { Fragment } from 'react'

import { CssReset } from '../src'

const CssResetWrapper = fn => (
    <Fragment>
        <CssReset />
        {fn()}
    </Fragment>
)

export { CssResetWrapper }
