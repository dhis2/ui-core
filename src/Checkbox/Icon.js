import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { resolve } from 'styled-jsx/css'

import { colors, theme } from '../theme.js'
import { Indeterminate, Checked, Unchecked } from '../icons/Checkbox'

const icons = resolve`
    svg {
        display: block;
        height: 24px;
        width: 24px;
        fill: ${theme.default};
    }

    .focus {
        fill: ${colors.grey800};
    }

    .checked {
        fill: ${colors.teal400};
    }

    .disabled {
        fill: ${theme.disabled};
    }

    .error {
        fill: ${theme.error};
    }

    .valid {
        fill: ${theme.valid};
    }

    .warning {
        fill: ${theme.warning};
    }
`

export const Icon = ({
    focus,
    checked,
    disabled,
    valid,
    error,
    warning,
    indeterminate,
}) => {
    const classes = cx(icons.className, {
        checked: checked && !valid && !error && !warning,
        focus,
        disabled,
        valid,
        error,
        warning,
    })

    return (
        <div className={cx({ focus })}>
            {indeterminate ? (
                <Indeterminate className={classes} />
            ) : checked ? (
                <Checked className={classes} />
            ) : (
                <Unchecked className={classes} />
            )}

            {icons.styles}
            <style jsx>{`
                div {
                    position: relative;
                    margin: 0 6px 0 0;
                }

                .focus:before {
                    content: '';
                    position: absolute;
                    border: 2px solid ${colors.blue600};
                    border-radius: 4px;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    )
}

Icon.propTypes = {
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: propTypes.bool,
    error: propTypes.bool,
    warning: propTypes.bool,
    indeterminate: propTypes.bool,
    focus: propTypes.bool,
}
