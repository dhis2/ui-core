import React from 'react'
import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import { spacers } from '../theme.js'
import { Close } from '../icons/Close.js'
import { iconStyles } from './styles.js'

const Dismiss = ({ onClick }) => (
    <div onClick={onClick}>
        <Close className={cx(iconStyles.className, 'dismiss')} />
        {iconStyles.styles}
        <style jsx>{`
            div {
                margin-left: ${spacers.dp24};
            }
            div:hover {
                cursor: pointer;
            }
        `}</style>
    </div>
)

Dismiss.propTypes = {
    onClick: propTypes.func.isRequired,
}

export { Dismiss }
