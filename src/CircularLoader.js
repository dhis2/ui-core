import cx from 'classnames'
import propTypes from 'prop-types'
import React from 'react'

import { sizePropType } from './common-prop-types.js'
import styles from './CircularLoader/styles.js'

/**
 * @module
 * @param {CircularLoader.PropTypes} props
 * @returns {React.Component}
 * @example import { CircularLoader } from @dhis2/ui-core
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/loading.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/circularloader--default|Storybook}
 */
const CircularLoader = ({ small, large, className }) => (
    <div
        role="progressbar"
        className={cx(className, {
            small,
            large,
        })}
    >
        <svg viewBox="22 22 44 44">
            <circle
                className="circle"
                cx="44"
                cy="44"
                r="20.2"
                fill="none"
                strokeWidth="3.6"
            />
        </svg>
        <style jsx>{styles}</style>
    </div>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {boolean} [small] - `small` and `large` are mutually exclusive.
 * @prop {boolean} [large]
 */
CircularLoader.propTypes = {
    className: propTypes.string,
    small: sizePropType,
    large: sizePropType,
}

export { CircularLoader }
