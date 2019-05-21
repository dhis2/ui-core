import React from 'react'

import { CssReset } from '../src'

const CssResetWrapper = fn => (
    <div style={{ margin: '10px' }}>
        <CssReset />
        {fn()}
    </div>
)

export { CssResetWrapper }
