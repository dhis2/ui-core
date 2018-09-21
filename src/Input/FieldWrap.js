/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { bemClassNames } from '../utils'
import './fieldwrap.css'

const bem = bemClassNames('d2ui-field-wrap')

const FieldWrap = ({
    children,
    valid,
    warning,
    disabled,
    error,
    dense,
    block,
    helpText,
    className,
}) => {
    let computedClassName = bem.b({
        valid,
        warning,
        disabled,
        error,
        dense,
        'full-width': block,
    })

    if (className) {
        computedClassName += ` ${className}`
    }

    return (
        <div className={computedClassName}>
            {children}
            {helpText && <div className={bem.e('help-text')}>{helpText}</div>}
        </div>
    )
}

FieldWrap.propTypes = {
    // Because the FieldWrap is the root component for a number of inputs
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

export default FieldWrap
