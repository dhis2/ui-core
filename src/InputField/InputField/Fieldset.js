import React from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { inputFontSizeValue } from '../../forms/constants'
import { colors, theme } from '../../theme'

const styles = css`
    .flatline {
        bottom: 0;
        border: 1px solid ${colors.grey500};
        border-radius: 5px;
        box-sizing: border-box;
        display: block;
        height: 100%;
        left: 0;
        padding-left: 8px;
        pointer-events: none;
        position: absolute;
        right: 0;
    }

    :global(.field.status-default:hover) .flatline,
    :global(.field.status-default:hover) .flatline.idle.filled,
    :global(.field.status-default:hover) .flatline.focused {
        border: 1px solid ${colors.grey700};
    }

    :global(.field.status-default.disabled) .flatline,
    :global(.field.status-default.disabled:hover) .flatline {
        border: 1px solid rgba(196, 196, 196, 0.2);
    }

    .flatline.idle.filled {
        border: 1.5px solid ${colors.grey500};
    }

    .flatline.focused {
        border: 1.5px solid ${theme.secondary600};
    }

    /*
     * flatlined fieldset status states
     */
    .flatline.valid,
    .flatline.valid.idle.filled,
    .flatline.valid.focused {
        border: 1.5px solid ${colors.blue600};
    }
    .flatline.warning,
    .flatline.warning.idle.filled,
    .flatline.warning.focused {
        border: 1.5px solid ${colors.yellow500};
    }
    .flatline.error,
    .flatline.error.idle.filled,
    .flatline.error.focused {
        border: 1.5px solid ${colors.red500};
    }
`

export const Fieldset = props => {
    if (props.kind !== 'outlined') return null

    const className = cx('flatline', props.status, {
        focused: props.isFocused,
        idle: !props.isFocused,
        filled: props.hasValue,
    })

    return (
        <fieldset className={className}>
            <Legend>{props.children}</Legend>
            <style jsx>{styles}</style>
        </fieldset>
    )
}

const Legend = props => (
    <legend>
        <span>&nbsp;</span>
        {props.children}
        <style jsx>{`
            span {
                display: inline-block;
                width: 0;
            }
        `}</style>
    </legend>
)
