import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Contents } from './Contents.js'

export const Content = ({ open, children, label }) => (
    <div>
        {label}
        <Contents open={open}>{children}</Contents>
    </div>
)

Content.propTypes = {
    children: propTypes.node,
    label: propTypes.node,
    open: propTypes.bool,
}
