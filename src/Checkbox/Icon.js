import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { resolve } from 'styled-jsx/css'

import { colors, theme } from '../theme'
import { Indeterminate, Checked, Unchecked } from '../icons/Checkbox'

const icons = resolve`
    svg {
        height: 24px;
        width: 24px;
        fill: ${theme.default};
    }

    .focus :global(path) {
        stroke: #646464;
        stroke-width: 2px;
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
        <Fragment>
            {indeterminate ? (
                <Indeterminate className={classes} />
            ) : checked ? (
                <Checked className={classes} />
            ) : (
                <Unchecked className={classes} />
            )}

            {icons.styles}
        </Fragment>
    )
}

Icon.propTypes = {
    checked: propTypes.bool,
    disabled: propTypes.bool,
    valid: propTypes.bool,
    error: propTypes.bool,
    warning: propTypes.bool,
    indeterminate: propTypes.bool,
}
