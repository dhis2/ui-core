import propTypes from 'prop-types'
import React from 'react'

import { statusPropType } from './common-prop-types.js'
import { Label } from './Label.js'
import { ArrowDown } from './icons/Arrow.js'

import { Select } from './Select.js'

const TailIcon = () => (
    <div>
        <ArrowDown />
        <style jsx>{`
            div {
                pointer-events: none;
                position: absolute;
                right: 4px;
            }
        `}</style>
    </div>
)

/**
 * @module
 *
 * @param {SelectField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { SelectField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/select.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/select-regular--no-value|Storybook}
 */
class SelectField extends React.Component {
    state = {
        focus: this.props.initialFocus,
    }

    onFocus = e => {
        this.setState({ focus: true })

        if (this.props.onFocus) {
            this.props.onFocus(e)
        }
    }

    onBlur = e => {
        this.setState({ focus: false })

        if (this.props.onBlur) {
            this.props.onBlur(e)
        }
    }

    isFocused() {
        return this.state.focus
    }

    render() {
        const {
            dense,
            required,
            label,
            disabled,
            name,
            valid,
            error,
            warning,
            loading,
            children,
            value,
            tabIndex,
            onChange,
        } = this.props
        const { focus } = this.state

        return (
            <Label
                focus={focus}
                label={label}
                value={!!value}
                htmlFor={name}
                required={required}
                disabled={disabled}
                valid={valid}
                warning={warning}
                error={error}
                loading={loading}
                dense={dense}
            >
                <Select
                    focus={focus}
                    name={name}
                    value={value}
                    disabled={disabled}
                    dense={dense}
                    tabIndex={tabIndex}
                    onChange={onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                >
                    {children}
                </Select>

                <TailIcon />
            </Label>
        )
    }
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} name
 * @prop {function} onChange
 * @prop {string} label
 * @prop {string} [value]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 * @prop {Array|Object} [children]
 * @prop {boolean} [required]
 * @prop {boolean} [disabled]
 * @prop {boolean} [dense]
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, `loading`, are
 * mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [loading]
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 */
SelectField.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    label: propTypes.string.isRequired,

    value: propTypes.string,
    className: propTypes.string,
    tabIndex: propTypes.string,

    helpText: propTypes.string,
    validationText: propTypes.string,

    children: propTypes.oneOfType([
        propTypes.arrayOf(
            propTypes.shape({
                tagName: propTypes.oneOf(['OPTION', 'OPTGROUP']),
            })
        ),
        propTypes.shape({
            tagName: propTypes.oneOf(['OPTION', 'OPTGROUP']),
        }),
    ]),

    required: propTypes.bool,
    disabled: propTypes.bool,
    dense: propTypes.bool,
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,
    initialFocus: propTypes.bool,

    onFocus: propTypes.func,
    onBlur: propTypes.func,
}

export { SelectField }
