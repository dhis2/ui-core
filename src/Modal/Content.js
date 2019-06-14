import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { spacers } from '../theme.js'

export const Content = ({ children, scrollable }) => (
    <div className={cx({ scrollable })}>
        {children}

        <style jsx>{`
            div {
                flex-grow: 1;
                margin-bottom: ${spacers.dp32};
                overflow-y: auto;
                padding: 0 ${spacers.dp24};
            }

            div:first-child {
                padding-top: ${spacers.dp24};
            }
        `}</style>
    </div>
)

Content.propTypes = {
    children: propTypes.node.isRequired,
}
