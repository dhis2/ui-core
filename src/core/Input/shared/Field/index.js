/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import s from './styles'

function Field({
    children,
    valid,
    warning,
    disabled,
    error,
    dense,
    block,
    helpText,
    className,
}) {
    return (
        <div
            className={s('container', className, {
                valid,
                warning,
                disabled,
                error,
                dense,
                'full-width': block,
            })}
        >
            {children}
            {helpText && <div className={s('help-text')}>{helpText}</div>}
        </div>
    )
}

Field.propTypes = {
    // Because the Field is the root component for a number of inputs
    // it is convenient to be able to add a custom className
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    dense: PropTypes.bool,
    block: PropTypes.bool,
    helpText: PropTypes.string,
}

export { Field }
export default Field
