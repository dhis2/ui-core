import React from 'react'
import propTypes from 'prop-types'

import { spacers } from './theme.js'

const FormControl = ({ children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                margin: 0 0 ${spacers.dp16};
            }
        `}</style>
    </div>
)

FormControl.propTypes = {
    children: propTypes.node.isRequired,
}

export { FormControl }
