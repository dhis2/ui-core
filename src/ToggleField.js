import cx from 'classnames'
import { resolve } from 'styled-jsx/css'
import propTypes from '@dhis2/prop-types'
import React from 'react'

import { statusPropType } from './common-prop-types.js'
import { spacers } from './theme.js'
import { Field } from './Field.js'
import { Help } from './Help.js'

const labelStyles = resolve`
    label.required::after {
        padding-left: ${spacers.dp4};
        content: '*';
    }
`

const ToggleField = ({
    value,
    label,
    name,
    className,
    tabIndex,
    onChange,
    onFocus,
    onBlur,
    checked,
    disabled,
    valid,
    warning,
    error,
    dense,
    initialFocus,
    required,
    helpText,
    validationText,
    dataTest,
    toggleComponent: ToggleComponent,
}) => (
    <Field className={className} dataTest={dataTest}>
        <ToggleComponent
            value={value}
            label={label}
            name={name}
            className={cx(labelStyles.className, { required })}
            tabIndex={tabIndex}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            checked={checked}
            disabled={disabled}
            valid={valid}
            warning={warning}
            error={error}
            dense={dense}
            initialFocus={initialFocus}
        />

        {helpText ? <Help>{helpText}</Help> : null}

        {validationText ? (
            <Help error={error} warning={warning} valid={valid}>
                {validationText}
            </Help>
        ) : null}

        {labelStyles.styles}
    </Field>
)

ToggleField.defaultProps = {
    dataTest: 'dhis2-uicore-togglefield',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @private
 *
 * @prop {string} value
 * @prop {Node} label
 * @prop {string} [name]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 * @prop {function} [onChange]
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 * @prop {boolean} [checked]
 * @prop {boolean} [disabled]
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, `loading`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [dense]
 * @prop {boolean} [initialFocus]
 * @prop {boolean} [required]
 * @prop {string} [helpText]
 * @prop {string} [validationText]
 * @prop {function} toggleComponent
 */
ToggleField.propTypes = {
    label: propTypes.node.isRequired,
    toggleComponent: propTypes.func.isRequired,
    checked: propTypes.bool,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    error: statusPropType,
    helpText: propTypes.string,
    initialFocus: propTypes.bool,
    name: propTypes.string,
    required: propTypes.bool,
    tabIndex: propTypes.string,
    valid: statusPropType,
    validationText: propTypes.string,
    value: propTypes.string,
    warning: statusPropType,
    onBlur: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
}

export { ToggleField }
