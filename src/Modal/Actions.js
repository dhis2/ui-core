import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { Button } from '../index'

export const Actions = ({ children }) => (
    <div>
        {children}

        <style jsx>{`
            div {
                padding: 0 24px 20px;
                display: flex;
                justify-content: flex-end;
            }
            div > :global(*:not(:first-child)) {
                margin-left: 16px;
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
