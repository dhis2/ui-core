import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import React from 'react'
import { resolve } from 'styled-jsx/css'

import { statusPropType } from '../common-prop-types.js'
import { Checked, Indeterminate, Unchecked } from '../icons/Checkbox.js'
import { colors, theme } from '../theme.js'

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
                    border: 2px solid transparent;
                    border-radius: 4px;
                    margin: 0 6px 0 0;
                }

                div.focus {
                    border-color: ${colors.blue600};
                }
            `}</style>
        </div>
    )
}

Icon.propTypes = {
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: statusPropType,
    error: statusPropType,
    warning: statusPropType,
    indeterminate: propTypes.bool,
    focus: propTypes.bool,
}
