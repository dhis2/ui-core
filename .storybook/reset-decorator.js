import React from 'react'

import { CssReset } from '../src'

const CssResetWrapper = fn => (
    <div style={{ margin: 16 }}>
        <CssReset />
        {fn()}
    </div>
)

export { CssResetWrapper }
