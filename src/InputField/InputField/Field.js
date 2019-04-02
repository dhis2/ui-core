import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { colors, theme } from '../../theme'
import {
    heightDefault,
    heightDense,
    innerSpacingSides,
} from '../../forms/constants'

const styles = css`
    .size-default {
        height: ${heightDefault};
    }

    .size-dense {
        height: ${heightDense};
    }

    .field {
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: ${innerSpacingSides};
    }

    /**
     * we have disabled the pointer-events for the fieldset so we can click
     * through it, that's why we target it through the parent's hover
     */
    .field.kind-filled {
        border-bottom: 2px solid transparent;
        border-radius: 5px;
        background-color: rgba(0, 0, 10, 0.05);
    }

    .field.kind-filled:hover,
    .field.kind-filled.focused {
        border-bottom: 2px solid ${theme.secondary600};
        background-color: rgba(0, 0, 10, 0.08);
    }

    .field.kind-filled.status-valid:hover,
    .field.kind-filled.focused.status-valid {
        border-bottom: 2px solid ${colors.blue600};
    }
    .field.kind-filled.status-warning:hover,
    .field.kind-filled.focused.status-warning {
        border-bottom: 2px solid ${colors.yellow500};
    }
    .field.kind-filled.status-error:hover,
    .field.kind-filled.focused.status-error {
        border-bottom: 2px solid ${colors.red500};
    }

    .field.kind-filled.disabled:hover,
    .field.kind-filled.disabled {
        border: 2px solid transparent;
        background-color: rgba(0, 0, 10, 0.02);
        color: ${colors.grey500};
    }

    /* IE */
    _:-ms-input-placeholder,
    :root .flatline,
    _:-ms-input-placeholder,
    :root .field.kind-filled {
        border-radius: 0px;
    }
`

export const Field = props => {
    const className = cx(
        'field',
        `size-${props.size}`,
        `status-${props.status}`,
        `kind-${props.kind}`,
        {
            focused: props.isFocused,
            filled: props.value,
            disabled: props.disabled,
        }
    )

    return (
        <div className={className}>
            {props.children}
            <style jsx>{styles}</style>
        </div>
    )
}

Field.propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isFilled: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
}
