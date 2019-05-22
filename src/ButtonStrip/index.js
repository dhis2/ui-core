import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { buttonArrayPropType } from './helper'
import styles from './styles'

const ButtonStrip = ({ className, children, compact, alignEnd }) => (
    <div
        className={cx(className, {
            compact,
            'align-end': alignEnd,
        })}
    >
        {children}

        <style jsx>{styles}</style>
    </div>
)

ButtonStrip.propTypes = {
    className: propTypes.string,
    children: buttonArrayPropType.isRequired,
    compact: propTypes.bool,
    alignEnd: propTypes.bool,
}

export { ButtonStrip }
