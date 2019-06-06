import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { Button } from '../index.js'
import { spacers } from '../theme.js'

export const Actions = ({ children }) => (
    <div>
        {children}

        <style jsx>{`
            div {
                padding: 0 ${spacers.dp24} ${spacers.dp24};
                display: flex;
                justify-content: flex-end;
            }
        `}</style>
    </div>
)

Actions.propTypes = {
    children: propTypes.oneOfType([
        propTypes.element,
        propTypes.arrayOf(propTypes.element),
    ]).isRequired,
}
