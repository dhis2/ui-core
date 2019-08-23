import propTypes from 'prop-types'
import React from 'react'

import { statusPropType } from '../common-prop-types'
import { LabelFilled, LabelOutlined } from '../FieldLabel'
import { ArrowDown } from '../icons/Arrow'
import { InternalSelect } from './InternalSelect'

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

class Select extends React.Component {
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
            tabIndex,
            onChange,
        } = this.props
        const { focus } = this.state

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
                <InternalSelect
                    focus={focus}
                    name={name}
                    value={value}
                    disabled={disabled}
                    filled={filled}
                    dense={dense}
                    tabIndex={tabIndex}
                    onChange={onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                >
                    {children}
                </InternalSelect>

                <TailIcon />
            </Container>
        )
    }
}

Select.propTypes = {
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    label: propTypes.string.isRequired,

    value: propTypes.string,
    className: propTypes.string,
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
    valid: statusPropType,
    warning: statusPropType,
    error: statusPropType,
    loading: propTypes.bool,
    initialFocus: propTypes.bool,

    onFocus: propTypes.func,
    onBlur: propTypes.func,
}

export { Select }
