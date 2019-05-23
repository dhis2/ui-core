import propTypes from 'prop-types'
import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

import { ArrowDown } from '../icons/Arrow'
import { LabelFilled, LabelOutlined } from '../FieldLabel'
import { Select } from './Select'
import { colors } from '../theme'

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

class SelectField extends React.Component {
    state = {
        focus: this.props.focus,
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
        return this.state.focused
    }

    render() {
        const {
            type,
            filled,
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
            autocomplete,
            autofocus,
            readonly,
            tabIndex,
            onChange,
            focus = this.state.focus,
        } = this.props

        const Container = filled ? LabelFilled : LabelOutlined

        return (
            <Container
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
                    name={name}
                    value={value}
                    disabled={disabled}
                    filled={filled}
                    dense={dense}
                    autocomplete={autocomplete}
                    autofocus={autofocus}
                    tabIndex={tabIndex}
                    readonly={readonly}
                    onChange={onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                >
                    {children}
                </Select>

                <TailIcon />
            </Container>
        )
    }
}

SelectField.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    label: propTypes.string.isRequired,

    value: propTypes.string,
    className: propTypes.string,
    autocomplete: propTypes.string,
    tabIndex: propTypes.string,

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
    filled: propTypes.bool,
    dense: propTypes.bool,
    focus: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
    error: propTypes.bool,
    loading: propTypes.bool,
    autofocus: propTypes.bool,
    readonly: propTypes.bool,

    onFocus: propTypes.func,
    onBlur: propTypes.func,
}

export { SelectField }
